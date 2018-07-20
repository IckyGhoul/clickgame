import React from "react";
import "./item.css";

const ClickItem = props => (
  <div
    role="image"
    aria-label="click item"
    // passes props id to click event
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item${props.shake ? " shake" : ""}`}
  />
);

export default ClickItem;
