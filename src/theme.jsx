import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'light',
      primary: {
        main: "#F2C94C",
        light: "#454545",
        dark: "#323232"
      },
      secondary: {
        main: "#5D5FEF",
      },
      warning: {
        main: "#EB5757",
      },
      text: {
        gray0: "#323232",
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#BDBDBD",
        n100: "#FFFFFF",
        n80: "#CFD6E5",
        n20: "#41454D",
        n10: "#2B2E33",
        black: "#000000",
      },
    },
  });

export default theme