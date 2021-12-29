//function component(strings, ...dynamicValues) {
//return function (props) {
//let newContent = strings.slice();
//console.log(newContent);
//dynamicValues.forEach((value, index) => {
//newContent[index] += props[value];
//});
//return newContent.join("");
//};
//}

//const styled = {
//h1: function (styles) {
//return function (content) {
//return `<h1 style= "${styles}">${content}</h1>`;
//};
//},
//h2: "",
//div: "",
//};

//const TitleStyled = styled.h1`
//color: orange;
//font-family: system-ui;
//font-size: 50px;
//text-shadow: 2px 2px 0 black;
//line-height: 100hv;
//`;

//const props = {
//message: "No te rindas",
//name: "jhonny",
//};

//const Title = component`<marquee> ${"message"} ${"name"} </marquee> `(props);

//function render(component, container) {
//container.innerHTML = component;
//}

//render(TitleStyled(Title), window.container);

function component(strings, ...dynamicValues) {
  return function (props) {
    let newContent = strings.slice();
    console.log(newContent);
    dynamicValues.forEach((v, i) => {
      newContent[i] += props[v];
    });
    return newContent.join("");
  };
}

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

const TitleStyled = styled.h1`
  font-family: system-ui;
  color: red;
  font-size: 32px;
  margin: 0;
`;

const AvatarStyled = styled.img`
  max-width: 100px;
  border-radius: 20%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
`;

const DescripcionStyled = styled.p`
  font-family: system-ui;
  color: gray;
  font-size: 18px;
  margin: 0 0 16px;
`;

const HoraStyled = styled.div`
  font-family: system-ui;
  color: gray;
`;

const props = {
  name: "Jhonny Stiven Agudelo",
  avatar: "https://picsum.photos/200/300",
  descripcion: "hhhhhhhhhhhhhhhhh",
  h: "dddd",
};

const Title = component`${"name"}`(props);
const avatar = component`${"avatar"}`(props);
const descripcion = component`${"descripcion"}`(props);
const h = component`${"h"}`(props);

function render(component, container) {
  container.innerHTML += component;
}

render(TitleStyled(Title), window.container);
render(AvatarStyled(avatar), window.container);
render(DescripcionStyled(descripcion), window.container);
render(HoraStyled(h), window.container);
