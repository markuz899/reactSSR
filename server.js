let path = require("path");
let fsp = require("fs/promises");
let express = require("express");
require("dotenv").config();

let root = process.cwd();
let isProduction = process.env.NODE_ENV === "production";
let port = process.env.PORT || 3000;

function resolve(p) {
  return path.resolve(__dirname, p);
}

async function createServer() {
  let app = express();
  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;
  const ssrManifest = isProduction
    ? resolve("./dist/client/ssr-manifest.json", "utf-8")
    : undefined;

  if (!isProduction) {
    vite = await require("vite").createServer({
      root,
      server: { middlewareMode: true },
    });

    app.use(vite.middlewares);
  } else {
    app.use(require("compression")());
    app.use(express.static(resolve("dist/client")));
  }

  app.use("*", async (req, res) => {
    let url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        template = await fsp.readFile(resolve("index.html"), "utf8");
        template = await vite.transformIndexHtml(url, template);
        render = await vite
          .ssrLoadModule("src/entry.server.tsx")
          .then((m) => m.render);
      } else {
        template = await fsp.readFile(
          resolve("dist/client/index.html"),
          "utf8"
        );
        render = (await import("./dist/server/entry.server.mjs")).render;
      }

      const rendered = await render({ url }, ssrManifest);

      const html = template
        .replace(`/* app-head */`, rendered.head ?? "")
        .replace(`<!--app-html-->`, rendered.html ?? "");
      res.setHeader("Content-Type", "text/html");
      return res.status(200).end(html);
    } catch (error) {
      if (!isProduction) {
        vite.ssrFixStacktrace(error);
      }
      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  });

  return app;
}

createServer().then((app) => {
  app.listen(port, () => {
    console.log(`HTTP server is running at http://localhost:${port}`);
  });
});
