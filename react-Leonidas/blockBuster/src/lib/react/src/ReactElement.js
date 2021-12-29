import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => render(child, container));
  }
  return render(children, container);
}

function setEvent(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element) {
  //soporte de eventos

  if (prop.startsWith("on")) {
    const event = prop.replace("on", "").toLowerCase();
    return setEvent(element, event, value);
  }

  //suporte   for children

  if (prop === "children") {
    return renderChildren(value, element);
  }

  //soporte para atributos
  const attribute = value;
  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, content) {
  //creando tipo de elemento
  const element = document.createElement(type);
  //contenido
  if (content) {
    element.textContent = content;
  }

  //Propiedades
  if (props) {
    Object.keys(props).forEach((prop) =>
      setProperties(prop, props[prop], element)
    );
  }
  //console.log(Object.keys(props));
  return element;
}
