import { ITheme } from "./interface";
import defaultTheme from "./tenant/default";

let palette;
try {
  /* @vite-ignore */
  const module = await import(`./tenant/${import.meta.env.VITE_TENANT}`);
  palette = module.default;
} catch (error) {
  console.error(`Theme not found: ${import.meta.env.VITE_TENANT}`);
}

const theme: ITheme = {
  ...defaultTheme,
  ...palette,
};

export const availableSize: string[] = ["xs", "sm", "md", "lg", "xl"];

export const BASE_COLOR = {
  primary: theme.colors.primary,
  info: theme.colors.primary,
  success: theme.colors.success,
  warning: theme.colors.warning,
  error: theme.colors.error,
  ghost: theme.colors.dark,
};

export default theme;
