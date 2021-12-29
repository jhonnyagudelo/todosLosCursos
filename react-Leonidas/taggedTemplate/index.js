function taggedTemplate(strings, ...dynamicValues) {
  //console.log(strings, dynamicValues);
  let newContent = "";
  strings.forEach((string, index) => {
    //let strong = "";
    //if (dynamicValues[index]) {
    //strong = `<strong>${dynamicValues[index]}</strong>`;
    //}
    const strong = dynamicValues[index]
      ? `<strong>${dynamicValues[index]}</strong>`
      : "";
    newContent += `${string} ${strong}`;
  });
  return `<p>${newConten}</p>`;
}

const message = taggedTemplate`El ${"Trabajo duro"} supera al ${"talento natural"}`;
document.body.innerHTML = message;
