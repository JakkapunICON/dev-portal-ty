import { css } from "styled-components";
import { ThemeType } from "../../models";
import { lightColorsTheme } from "./lightTheme";

export const BASE_COLORS = {
  white: "#ffffff",
  black: "#000000",
  dark: "#172b4d",
  gray: "#8898aa"
};

export const themeObject = {
  light: lightColorsTheme,
  dark: lightColorsTheme
};

const getThemeVariables = (theme: ThemeType) => css`
  color-scheme: ${theme};
  --background-color: ${themeObject[theme].background};
  --menu-color: ${themeObject[theme].menu};
  --header-color: ${themeObject[theme].header};
  --login-color: ${themeObject[theme].login};
  --primary-color: ${themeObject[theme].primary};
  --title-color: ${themeObject[theme].title};
`;

export const lightThemeVariables = css`
  ${getThemeVariables("light")}
`;

export const commonThemeVariables = css`
  color-scheme: light dark;
  --white-color: ${BASE_COLORS.white};
  --black-color: ${BASE_COLORS.black};
  --dark-color: ${BASE_COLORS.dark};
  --gray-color: ${BASE_COLORS.gray};
`;

// export const BREAKPOINTS = {
//   xs: 360,
//   sm: 568,
//   md: 768,
//   lg: 992,
//   xl: 1280,
//   xxl: 1920,
// } as const;

// const getMedia = <T extends number>(breakpoint: T): `(min-width: ${T}px)` =>
//   `(min-width: ${breakpoint}px)`;

// export const media = {
//   xs: getMedia(BREAKPOINTS.xs),
//   sm: getMedia(BREAKPOINTS.sm),
//   md: getMedia(BREAKPOINTS.md),
//   lg: getMedia(BREAKPOINTS.lg),
//   xl: getMedia(BREAKPOINTS.xl),
//   xxl: getMedia(BREAKPOINTS.xxl),
// };
