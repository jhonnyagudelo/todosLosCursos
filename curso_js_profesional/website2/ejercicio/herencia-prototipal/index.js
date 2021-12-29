function Hero(name) {
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`Hola, soy ${this.name}`);
};

const zelda = new Hero("zelda");

console.log("name:", zelda.name);
