const person = () => {
  var saveName = "name";
  return {
    getName: () => saveName,
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("jhonny");
console.log(newPerson.getName());
