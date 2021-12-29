import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-component.js";
import Header from "./header.js";
import Actions from "./action.js";
import Search from "./search.js";
import Filter from "./filter.js";
import MovieList from "./movie-list.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [new Search(), new Filter()],
        }),
        new MovieList(),
      ],
    });
  }
}

export default App;
