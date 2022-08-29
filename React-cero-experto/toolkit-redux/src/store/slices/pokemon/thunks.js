// Redux-thunk te permite escribir 
// creadores de acciones que retornan una 
// función en vez de un objeto de acción típico. 
  // Entonces, el thunk puede ser usado para retrasar el envío de una acción hasta que se cumpla una línea de código asíncrona.


import { startLoadingPokemons, setPokemons } from './pokemonSlice';
import { pokemonApi} from '../../../api/pokemonApi';

export const getPokemons = (page= 0) =>{
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())
    //TODO: realizar peticion
    // const res = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=10&&offset=${page * 10}`)
    // const data = await res.json();
    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
    console.log(resp)

    dispatch(setPokemons({ pokemons:resp?.data?.results, page:page + 1})) }
}
