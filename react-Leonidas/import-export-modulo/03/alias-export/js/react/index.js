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

export { component };
