const tags = ["h1", "h2", "h3", "div", "p", "article", "img"];
const tagsSelfClosing = ["img"];

function createStyledApi(tags) {
  const styled = {};
  //recorremos el array, por cada etiqueta vamos a generar una variable style
  tags.forEach((tag, index) => {
    styled[tag] = function (styles) {
      return tagsSelfClosing.includes(tags[index])
        ? (content) => `<${tag} style="${styles}"src="${content}" >`
        : (content) => `<${tag} style="${styles}"> ${content}</${tag}> `;
    };
  });
  //devolvemos styled;
  return styled;
}

const styled = createStyledApi(tags);

export default styled;
