import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  shadows: ["none"],
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    body1: {
      fontSize: "14px",
      marginBottom: "7px",
    },
  },
  overrides: {
    MuiList: {
      root: {
        border: "2px solid gray",
        borderRadius: "10px",
      },
    },
    MuiListItem: {
      root: {
        justifyContent: "center",
      },
    },

    MuiSnackbarContent: {
      root: {
        justifyContent: "center",
        backgroundColor: "#D1E2CD",
        color: "black",
        borderRadius: "10px",
        minWidth: "522px",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
});

export default theme;
