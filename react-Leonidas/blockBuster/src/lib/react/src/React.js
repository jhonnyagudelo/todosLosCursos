class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  //dato privado
  //# nombre = metodo
  //get = get #nombre
  //set = set #nombre
  //

  updater() {}
  #updater() {
    this.updater(this.render());
    this.componentDiUpdate();
  }

  // se llama antes que se reenderice el componente
  componentWillMount() {}

  //despues que la salida del componente ha sido renderizada
  componentDidMount() {}

  //Se llama cuando se actualiza
  componentDiUpdate() {}

  //Se dispara el metodo antes de volver a renderizar
  componentWillUpdate() {}

  //Se dispara el método shouldComponentUpdate

  //  Se dispara el método componentWillReceiveProps si recibe nuevas props

  setState(newState) {
    this.componentWillUpdate(newState);
    this.state = {
      ...this.state,
      ...newState,
    };
    this.#updater();
  }
  build() {
    this.componentWillMount();
    return this.render();
  }
}

export { Component };
