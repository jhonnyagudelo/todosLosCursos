// Ejemplo: renderMovies([{ title: "Spider-Man", release_date: "2019-06-30", poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg" }])
// Traducir las funciones de usar thens a usar async/await
// Crear función para que no nos gastemos la cantidad de requests demasiado rapido
// Crear función donde hacemos requests secuenciales
// Crear función donde hacemos requests en paralelo
// Crear función donde obtenemos el primer request que llegue

// The Movie Database API: https://developers.themoviedb.org/3/getting-started/introduction
const apiKey = "b89fc45c2067cbd33560270639722eae";

async function getMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function getTopMoviesIds(n = 3) {
  //return getPopularMovies().then(popularMovies =>
  //popularMovies.slice(0, n).map(movie => movie.id)
  //);
  const popularMovies = await getPopularMovies();
  const ids = popularMovies.slice(0, n).map((movie) => movie.id);
  return ids;
}

function renderMovies(movies) {
  const movieList = document.getElementById("movies");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
            <h5>${movie.title}</h5>
            <p>Released on <em>${movie.release_date}</em></p>
            `;

    movieList.appendChild(listItem);
  });
}

async function getTopMoviesInSequence() {
  const ids = await getTopMoviesIds();
  const movies = [];
  for (const id of ids) {
    const movie = await getMovie(id);
    movies.push(movie);
  }
  return movies;
}

function getTopMoviesInParallel() {
  return [];
}

async function getFastestTopMovie() {
  return {};
}

document.getElementById("sequence").onclick = async function () {
  const movies = await getTopMoviesInSequence();
  return renderMovies(movies);
};

document.getElementById("parallel").onclick = async function () {
  const movies = await getTopMoviesInParallel();
  renderMovies(movies);
};

document.getElementById("fastest").onclick = async function () {
  const movie = await getFastestTopMovie();
  renderMovies([movie]);
};
