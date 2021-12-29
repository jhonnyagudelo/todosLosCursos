import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  displayName = "User";
  state = { age: this.props.age };

  componentDidMount() {
    console.log(
      `El componenete ${this.displayName} se renderizo en la pantalla`
    );
  }

  componentWillMount() {
    console.log(
      `El componense ${this.displayName}  se va a actualizar por primera vez`
    );
  }

  componentDiUpdate() {
    console.log(`El componense ${this.displayName} se actualizo`);
  }

  componentWillUpdate(newState) {
    if (newState.age > 17) {
      const { name } = this.props;
      alert(`Ahora ${name} es mayor de edad`);
    }
  }

  //constructor(props) {
  //super(props);
  //this.handleClick(this);
  //}
  //handleClick(event) {
  //console.log(,this.propsthis);
  //}

  handleClick = (event) => {
    console.log(this.state.age);
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;
    return createElement("div", {
      class: "user",
      onClick: this.handleClick,
      children: [
        createElement("div", {
          class: avatar,
          children: createElement("img", { src: avatar }),
        }),
        createElement("h2", null, `Hola soy ${name} y tengo ${age} años`),
      ],
    });
  }
}

export default User;
