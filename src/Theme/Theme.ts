import { createTheme } from "@mui/material";
import { color } from "@mui/system";

const Theme = createTheme({
  palette: {
    background: {},
    primary: {
      main: "rgba(82, 130, 64, 1)",
    },
    secondary: {
      main: "rgba(189, 206, 102, 1)",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       borderRadius: '8px',
  //       fontWeight: "bold",
  //     },
  //     text: {
  //       secondary: {
  //         color: '#ffffff'
  //       },
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     root: {
  //       "& $notchedOutline": {
  //         borderColor: "rgba(82, 130, 64, 1)"
  //       },
  //       "&:hover $notchedOutline": {
  //         borderColor: "rgba(82, 130, 64, 1)"
  //       },
  //       "&$focused $notchedOutline": {
  //         borderColor: "rgba(82, 130, 64, 1)"
  //       },
  //       borderRadius: '8px',
  //       backgroundColor: '#d9b570',
  //       // Cor do texto do Form
  //       color: '#000000'
  //     }
  //     ,
  //   },
  //   MuiFormLabel: {
  //     root: {
  //       // Cor do texto quando sobe
  //       color: '#000000',
  //     },
  //   },
  //   MuiInputLabel: {
  //     root: {
  //       //Cor do Label
  //       color: '#000000'
  //     }
  //   },
  //   MuiInputAdornment: {
  //     filled: {
  //       color: "#000000"
  //     },
  //     root: {
  //       color: "#000000",
  //     },
  //   },
  // }
});

export default Theme;
