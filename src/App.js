import React, { Component } from "react";

import classes from "./App.module.css";

import VerticalTimeline from "./containers/VerticalTimeline/VerticalTimeline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>App working!</p>
        {/* VerticalTimeline recibe "isActive" como prop y que debe ser un objeto con las siguientes propiedades que tienen que ser booleanos: */}
        {/* received, processing, ready, sent, delivered */}
        <VerticalTimeline />
      </div>
    );
  }
}

export default App;
