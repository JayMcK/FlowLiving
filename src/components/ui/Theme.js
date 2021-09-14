import { createTheme } from "@material-ui/core/styles";

const flowRed = "#B86767";
const flowGold = "#F7D59C";
const flowGreen = "#CEE5D0";

export default createTheme({
  palette: {
    common: {
      red: flowRed,
      gold: flowGold,
      green: flowGreen,
    },
    primary: {
      main: flowRed,
    },
    secondary: {
      main: flowGold,
    },
  },
  typography: {
    h1: {
      fontFamily: "Josefin Sans",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: flowRed,
    },
    h2: {
      fontFamily: "Josefin Sans",
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: flowRed,
    },
    h3: {
      fontFamily: "Cookie",
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: flowRed,
    },
    h4: {
      fontFamily: "Josefin Sans",
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.5,
      fontStyle: "italic",
    },
    h5: {
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: flowGold,
      textTransform: "none",
    },
    h6: {
      fontFamily: "Josefin Sans",
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: "Josefin Sans",
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    learnButton: {
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      textTransform: "none",
    },
  },
});