import React from "react";
import Home from "./home";
import Contact from "./contact";
import ContactDetail from "./contactDetail";
import Login from "./login";
import NotFound from "./notFound";

// export const componentMap: { [key: string]: React.ComponentType<any> } = {
//   Home: React.lazy(() => import("./home")),
//   Contact: React.lazy(() => import("./contact")),
//   ContactDetail: React.lazy(() => import("./contactDetail")),
//   Login: React.lazy(() => import("./login")),
//   NotFound: React.lazy(() => import("./notFound")),
// };

export const componentMap: { [key: string]: React.ComponentType<any> } = {
  Home,
  Contact,
  ContactDetail,
  Login,
  NotFound,
};

export const createRoutes = (paths?: []) => {
  let routes: any = [];
  if (paths) {
    routes = paths;
  } else {
    routes.push({ path: "/", component: "Home" });
  }
  routes.push({ path: "/login", component: "Login" });
  routes.push({ path: "*", component: "NotFound" });
  return routes;
};

export const routesApi: any = [
  {
    path: "/",
    component: "Home",
    shield: false,
    hidden: false,
    sections: [
      {
        sectionName: "sectionA",
        kentico: {},
      },
      {
        sectionName: "sectionB",
        kentico: {},
      },
      {
        sectionName: "sectionC",
        kentico: {},
      },
    ],
  },
  {
    path: "/contact",
    component: "Contact",
    shield: false,
    hidden: false,
    sections: [
      {
        sectionName: "sectionA",
        kentico: {},
      },
      {
        sectionName: "sectionB",
        kentico: {},
      },
    ],
  },
  {
    path: "/contact/:id",
    component: "ContactDetail",
    shield: false,
  },
  {
    path: "/login",
    component: "Login",
    sections: [{ sectionName: "loginForm" }],
  },
  { path: "*", component: "NotFound" },
];

export const tenantInfo = {
  name: "Alfa",
  route: routesApi,
  sections: [
    {
      sectionName: "sectionA",
      kentico: {},
    },
    {
      sectionName: "sectionB",
      kentico: {},
    },
    {
      sectionName: "sectionC",
      kentico: {},
    },
  ],
};
