import React, { Component } from "react";

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "hola mundo",
    };
  }
  render() {
    return <h1>Hola mundo</h1>;
  }
}

export { Stateful };
