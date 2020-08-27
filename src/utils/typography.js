import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.618,
  googleFonts: [
    {
      name: "Noto Serif KR",
      styles: ["400", "700"],
    },
    {
      name: "Noto Sans KR",
      styles: ["400", "700"],
    },
    {
      name: "Lobster",
      styles: ["400"],
    },
    {
      name: "Kurale",
      styles: ["400", "700"],
    },
    {
      name: "Raleway",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Raleway", "Noto Sans KR", "sans-serif"],
  bodyFontFamily: ["Raleway", "Noto Serif KR", "serif"],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

export const { rhythm, scale } = typography

export default typography
