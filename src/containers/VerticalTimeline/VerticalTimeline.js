import React from "react";
import classes from "./VerticalTimeline.module.css";

import VerticalTimelineElement from "../VerticalTimelineElement/VerticalTimelineElement";

const verticalTimeline = (props) => {
  return (
    <div className={classes.verticalTimeline}>
      <VerticalTimelineElement
        isActive={props.isActive.received}
        title="Orden recibida"
      />
      <VerticalTimelineElement
        isActive={props.isActive.processing}
        title="Procesando orden"
      />
      <VerticalTimelineElement
        isActive={props.isActive.ready}
        title="Pedido listo"
      />
      <VerticalTimelineElement
        isActive={props.isActive.sent}
        title="Pedido enviado"
      />
      <VerticalTimelineElement
        isActive={props.isActive.delivered}
        title="Pedido entregado"
      />
    </div>
  );
};

export default verticalTimeline;
