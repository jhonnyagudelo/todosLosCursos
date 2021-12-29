import { render } from "./lib/react-dom.js";
import App from "./component/app.js";
const container = document.querySelector("#root");

render(new App(), container);
