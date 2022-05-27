const getImagen = async () => {
  try {
    const API_KEY = "LG6mKRLMZ7680Jx5Rmfrmg8EK6BCXCD7";
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data } = await res.json();
    const { url } = data?.images?.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (e) {
    /* handle error */
    console.log(e);
  }
};

getImagen();

//peticion
//[>Promesas de cadena<]
//.then((res) => res.json())
//.then(({ data }) => {
////console.log(data?.images?.original?.url);
//const { url } = data?.images?.original;

//const img = document.createElement("img");
//img.src = url;
//document.body.append(img);
//})
//.catch(console.warn);
