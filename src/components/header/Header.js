import React from "react";
import { withStyles, AppBar } from "@material-ui/core";
import { Style } from "./Style";

function Header(props) {
  const { classes } = props;

  return (
    <AppBar color="primary">
      <div className={classes.container}>
        <div className={classes.headerTitle}>
          <div className={classes.logo}>GT</div>
          <h1>Github</h1>
        </div>
      </div>
    </AppBar>
  );
}

export default withStyles(Style)(Header)
