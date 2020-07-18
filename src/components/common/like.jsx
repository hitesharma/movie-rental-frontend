import React from "react";

const Like = (props) => {
  let classes = "clickable fa fa-heart";
  if (!props.liked) classes += "-o";
  return <i onClick={props.onClick} className={classes} aroa-hidden="true" />;
};

export default Like;
