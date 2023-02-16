export type ThemeType = typeof light // This is the type definition for my theme object.
export const COLORS = {
  primary: "#FA8000",
	metalGrey: "#7B7B7B",
  lightOrange: "#fff7ee",
  red:"#550A21",
  black: "#000000",
  titanWhite: "#f1f1f1",
  white: "#ffffff",
  secondary: "#ffffff",
  blue: "#009ddf",
}

export const light = {
  colors: COLORS,
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
  button: {
    defaultColor: COLORS.white,
    defaultBackgroundColor: COLORS.primary,
    hoverBackgroundColor: COLORS.secondary,
    borderColor: COLORS.primary,
    hoverColor: COLORS.primary,
  },
} as const

// export const dark: ThemeType = {
// 	colors: {

// 	},
// 	breakpoints: {
// 		sm: "640px",
// 		md: "768px",
// 		lg: "1024px",
// 		xl: "1280px",
// 		xxl: "1536px",
// 	},
// } as const

const theme = light // set the light theme as the default.
export default theme
