import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { useSinglePhoto } from "../hooks/useSinglePhoto";

const PhotoCardWithQuery = ({ id }) => {
  const { loading, data } = useSinglePhoto(id);
  if (loading) return <p>"Cargando..."</p>;
  return <PhotoCard {...data} />;
};

export { PhotoCardWithQuery };
