import styled from "../lib/styled-component.js";
import { Component } from "../lib/react/src/React.js";
import { createElement } from "../lib/react/index.js";

const userStyled = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.primaryColor} 0%,
    ${(props) => props.primaryColor} 130px,
    ${(props) => props.tertiaryColor} 130px,
    ${(props) => props.tertiaryColor} 131px,
    ${(props) => props.secundaryColor} 131px,
    ${(props) => props.secundaryColor} 100%
  );
  color: ${({ fontColor }) => fontColor};
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  border-radius: 0.3rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
`;

const AvatarStyled = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
`;

const theme = {
  ligth: {
    primaryColor: "#f9f9f9",
    secundaryColor: "white",
    tertiaryColor: "rgba(0, 0, 0, .15)",
    fontColor: "black",
  },
  dark: {
    primaryColor: "#212429",
    secundaryColor: "#212429",
    tertiaryColor: "white",
    fontColor: "white",
  },
};

class User extends Component {
  state = {
    mode: "ligth",
  };

  setMode = (event) => {
    if (event.matches) {
      return this.setState({
        mode: "dark",
      });
    }
    this.setState({
      mode: "ligth",
    });
  };

  componentDidMount() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");
    this.setMode(mediaQuery);
    mediaQuery.addEventListener("change", this.setMode);
  }
  render() {
    const { mode } = this.state;
    const colors = mode === "ligth" ? theme.ligth : theme.dark;
    const { name, avatar } = this.props;
    return userStyled({
      ...colors,
      children: [
        AvatarStyled({
          src: avatar,
        }),
        createElement("h2", null, `${name} ${mode} mode`),
      ],
    });
    //`
    //${userStyled(`
    //${AvatarStyled(`${avatar}`)}
    //<h2>${name}</h2>
    //`)}
    //`;
  }
}

export default User;
