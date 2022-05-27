const API_KEY = "LG6mKRLMZ7680Jx5Rmfrmg8EK6BCXCD7";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

peticion
  /*Promesas de cadena*/
  .then((res) => res.json())
  .then(({ data }) => {
    //console.log(data?.images?.original?.url);
    const { url } = data?.images?.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
