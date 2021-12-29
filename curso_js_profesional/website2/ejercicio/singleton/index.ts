import Singleton from "../singleton";

const a = Singleton.getInstancia;
const b = Singleton.getInstancia;

console.log("A es igual b?", a === b);
