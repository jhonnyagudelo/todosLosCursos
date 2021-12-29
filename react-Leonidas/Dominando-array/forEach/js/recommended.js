import movies from "./movies.js";
import render from "./render.js";
const $button = document.querySelector("#recommended");

$button.addEventListener("click", () => {
  render(setRecommendedMovies(movies));
});

function setRecommendedMovies(movies) {
  return movies.map((movie, index) => {
    return { ...movie, recommended: movie.vote_average > 7 };

    //if (movie.vote_average > 7) {
    //return { ...movie, recommended: true };
    //}
    //return movie;
  });
}
