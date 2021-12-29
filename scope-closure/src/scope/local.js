const helloWorld = () => {
  const hello = "hello";
  console.log(hello);
};

helloWorld();

var scope = "i am global";

const functionScope = () => {
  var scope = "I am just local";
  const func = () => {
    return scope;
  };

  console.log(func());
};

functionScope();
