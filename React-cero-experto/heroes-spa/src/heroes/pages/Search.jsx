import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length === 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <section className="row">
        <article className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search to hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
          </form>
          <button className="btn btn-outline-primary mt-1">Search</button>
        </article>
        <article className="col-7">
          <h4>Resolve</h4>
          <hr />
          {/*
            (q === '')
              ? <div className="alert alert-primary"> Search a hero </div>
              : (heroes.length === 0)
              &&
              <div className="alert alert-danger">
                no hero <b>{q}</b>
              </div>
          */}

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            no hero <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </article>
      </section>
    </>
  );
};
