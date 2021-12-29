import React, { Component } from "react";

class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Maria",
    };
  }

  render() {
    return (
      <>
        {this.state.name === "Maria" ? <h1>Es maria</h1> : <h1>No es maria</h1>}
      </>
    );
  }
}
export default RenderizadoCondicional;

