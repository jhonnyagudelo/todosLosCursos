import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "./Search";
import { useCharacters } from "../hooks/useCharacters";

import "../css/chatacters.css";

const API = "https://rickandmortyapi.com/api/character/";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  //const [characters, setCharacters] = useState([]);
  const [favorites, dispastch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  /**
   * Lógica de useState
   * constante donde internamente estructuramos los elementos que necesitamos
   * de useState y lo iniciamos como un vector vacío
   */

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispastch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  //const handleSearch = () => {
  //setSearch(searchInput.current.value);
  //};

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);
  //const filteredUsers = characters.filter((user) => {
  //return user.name.toLowerCase().includes(search.toLowerCase());
  //});

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="container">
      <article className="favorites">
        {favorites.favorites.map((favorite) => (
          <li className="favorite" key={favorite.id}>
            <img src={favorite.image} width={30} alt={favorite.name} />
          </li>
        ))}
      </article>

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      <article className="characters">
        {filteredUsers.map((character) => (
          <div className="container2" key={character.id}>
            <div>
              <div className="datos">
                <h2>{character.name}</h2>
                <h3>{character.gender}</h3>
                <h3>{character.origin.name}</h3>
              </div>
              <img
                className="image"
                alt={character.name}
                src={character.image}
                width={150}
              />
              <button type="button" onClick={() => handleClick(character)}>
                Agregar
              </button>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export { Characters };
