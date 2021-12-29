import React, { Component } from "react";

class Propiedades extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Mi nombre es {this.props.name} {this.props.apellido} y mi amigo se
          llama {this.props.amigo}{" "}
        </h1>
      </div>
    );
  }
}

export default Propiedades;
