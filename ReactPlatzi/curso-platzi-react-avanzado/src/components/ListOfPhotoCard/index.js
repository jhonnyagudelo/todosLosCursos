import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useGetPhoto } from "../../hooks/useGetPhoto";

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhoto(categoryId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;
  return (
    <ul>
      {data.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard id={photo.id} {...photo} />
        </li>
      ))}
    </ul>
  );
};

export { ListOfPhotoCards };
