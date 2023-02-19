import React from "react";
import { withStyles } from "@material-ui/core";
import { Style } from "./Style";

function MovieCard(props) {

  const { classes, data } = props;

  return (
    <div onClick={() => window.open(data.html_url, '_blank')} className={classes.container}>
      <img height="250px" src={data?.owner?.avatar_url} alt={data.full_name} />
      <div className={classes.content}>
        <h3>{data.Title}</h3>
        <i>Name: {data.name}</i>
        <p style={{ margin: 0 }}>
          <b>Watchers_count:</b> {data.watchers_count}
          <br />
          <b>Stargazers_count:</b> {data.stargazers_count}
          <br />
          <b>git:</b> {data.html_url}
        </p>
      </div>
    </div>
  );
}


export default withStyles(Style)(MovieCard)
