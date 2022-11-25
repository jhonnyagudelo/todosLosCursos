import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);
  console.log(loading);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      {images.map((img) => (
        //spreed operator
        <GifGridItem key={img.id} {...img} />
      ))}
    </>
  );
};
export { GifGrid };
