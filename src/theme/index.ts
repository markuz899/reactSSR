import { ITheme } from "./interface";
import defaultTheme from "./tenant/default";
import primary from "./tenant/primary";

let custom = {};
let palette: any = {
  primary,
};

try {
  if (palette[import.meta.env.VITE_TENANT]) {
    custom = palette[import.meta.env.VITE_TENANT];
  }
} catch (error) {
  console.error(`Theme not found: ${import.meta.env.VITE_TENANT}`);
}

const theme: ITheme = {
  ...defaultTheme,
  ...custom,
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
