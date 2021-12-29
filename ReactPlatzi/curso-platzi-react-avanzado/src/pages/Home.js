import React from "react";
import { ListOfCategories } from "../components/ListOfCategory/index";
import { ListOfPhotoCards } from "../components/ListOfPhotoCard/index";

const Home = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
};

export default Home;
