import React, { Component } from "react";

import classes from "./VerticalTimelineElement.module.css";

import Icon from "../../components/Icon/Icon";
import Content from "../../components/Content/Content";
import Date from "../../components/Date/Date";

class VerticalTimelineElement extends Component {
  render() {
    return (
      <div className={classes.VerticalTimelineElement}>
        <Date />
        <Icon isActive={this.props.isActive} />
        <Content title={this.props.title} />
      </div>
    );
  }
}

export default VerticalTimelineElement;
