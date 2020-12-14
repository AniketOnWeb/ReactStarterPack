import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
const styles = (theme) => ({
  "@global": {
    html: {
      fontSize: 10,
      scrollBehavior: "smooth",
      // fontSize: 10,
      // [theme.breakpoints.up("sd")]: {
      //   fontSize: 11,
      // },
      // [theme.breakpoints.up("MacScaled")]: {
      //   fontSize: 12,
      // },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: 15,
      // },
      // [theme.breakpoints.up("lg")]: {
      //   fontSize: 20,
      // },
      // [theme.breakpoints.up("xl")]: {
      //   fontSize: 30,
      // },
    },

    body: {
      backgroundColor: "#fff",
    },
  },
});

const Main = withStyles(styles)(App);

ReactDOM.render(
  <CssBaseline>
    <ThemeProvider>
      <Fragment>
        <StylesProvider>
          <Main />
        </StylesProvider>
      </Fragment>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
