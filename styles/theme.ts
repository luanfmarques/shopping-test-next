export type ThemeType = typeof theme;

export const theme = {
  color: {
    background: "#FFFFFF",
    black: "#000000",
    backgroundGray: "#EEEEEE",
    itemsTitle: "#746A6A",
    itemsPrice: "#3486E6",
    itemAdd: "#3487DC",
    borderColor: "#E1E1E1",
    cartGray: "#7F7575",
    cartPrice: "#423B3B",
    removeCart: "#54A3FF",
    title: "#363636",
  },
  fontWeight: {
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  maxWidth: 1280,
  breakpoints: {
    sm: 480,
    md: 768,
    lg: 1024,
    xlg: 1200,
  },
};
