import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [url]);
  return characters;
};
/**
 * Lógica de useEffect
 * es una función con 1 parámetros
 * el primero es una función anónima donde va a estar la lógica
 * el segundo es una variable que esta escuchando si hay cambios
 */
export { useCharacters };
