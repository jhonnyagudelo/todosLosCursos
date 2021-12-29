import { renderMovieListFromMap } from "./render.js";
import { movieList, popular, notPopular, all } from "./normalize.js";

window.filter.addEventListener("change", function () {
  switch (this.value) {
    case "most-valued":
      return renderMovieListFromMap(popular, movieList);
    case "least-valued":
      return renderMovieListFromMap(notPopular, movieList);
    default:
      return renderMovieListFromMap(all, movieList);
  }
});
