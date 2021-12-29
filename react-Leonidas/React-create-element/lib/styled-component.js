import { createElement } from "../lib/react/index.js";

const tags = ["h1", "h2", "h3", "div", "p", "article", "img"];

function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice();
  dynamicValues.forEach((value, index) => {
    style[index] += value(props);
  });
  console.log(style);
  return style.join("");
}

function createStyledApi(tags) {
  const styled = {};
  //recorremos el array, por cada etiqueta vamos a generar una variable style
  tags.forEach((tag) => {
    styled[tag] = function (strings, ...dynamicValues) {
      return function (props, content) {
        const style = buildStyles(strings, dynamicValues, props);
        return createElement(
          tag,
          {
            ...props,
            style,
          },
          content
        );
      };
    };
  });
  //devolvemos styled;
  return styled;
}

const styled = createStyledApi(tags);

export default styled;
