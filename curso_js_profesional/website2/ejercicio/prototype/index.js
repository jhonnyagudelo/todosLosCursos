//const zelda = {
//name: "Zelda",
//};

//zelda.saludar = function () {
//console.log(`Hola soy ${this.name}`);
//};

//function Hero(name) {
//const hero = {
//name: name,
//};
//hero.saludar = function () {
//console.log(`Hola soy ${name}`);
//};
//return hero;
//}

//const zelda = Hero("zelda");
//zelda.saludar();

//const link = Hero("link");
//link.saludar();
//
//

//const HeroMethods = {
//saludar: function () {
//console.log(`Me llamo ${this.name}`);
//},
//};

//function Hero(name) {
//const hero = {
//name: name,
//};
//hero.saludar = HeroMethods.saludar;
//return hero;
//}

//const zelda = Hero("zelda");
//zelda.saludar();

//const link = Hero("link");
//link.saludar();

//const nuevoObjeto = Object.create(objeto);

//const heroMethods = {
//saludar: function () {
//console.log(`Soy super heroe ${this.name}`);
//},
//};

//function Hero(name) {
//const hero = Object.create(heroMethods);
//hero.name = name;
//return hero;
//}

//const zelda = Hero("zelda");
//zelda.saludar();

//const link = Hero("link");
//link.saludar();

//function Hero(name) {
//const hero = Object.create(Hero.prototype);
//hero.name = name;
//return hero;
//}

//Hero.prototype.saludar = function () {
//console.log(`${this.name}`);
//};

//const zelda = Hero("zelda");
//zelda.saludar();

//const link = Hero("link");
//link.saludar();
//
//

function Hero(name) {
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`New: ${this.name}`);
};

const zelda = new Hero("zelda");
zelda.saludar();

const link = new Hero("link");
link.saludar();
