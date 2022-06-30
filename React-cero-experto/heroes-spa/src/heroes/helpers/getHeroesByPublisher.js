import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) =>{
 const validePublishers =['DC Comics, Marvel Comics'];
  if(validePublishers.includes(publisher)){
    throw new Error(`${publisher} not exists`)
  }
  return heroes.filter(heroe => heroe.publisher === publisher);
}
