import { createTheme, createStyles } from "@mui/material/styles";

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins', 'sans-serif'
      ].join(','),
    },
    palette: {
        mode: 'light',
      primary: {
        main: "#F2C94C",
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
        blue: "#2F80ED",
      },
    },
    components: {
      MuiButton:{
        defaultProps: {
          color: 'secondary',
          disableElevation: true,
          disableFocusRipple: true,
          disableRipple: true,
          disableTouchRipple: true,
            
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '0.5rem',
            padding: '10px',
            fontSize: '15px',
            fontWeight: '500'
          },
        },
      }
    },
  });

export default theme