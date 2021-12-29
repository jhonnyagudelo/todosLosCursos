import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styled";
const URL_API = "https://petgram-server-jhonnyagudelo.vercel.app";

function useCategoryData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await window.fetch(`${URL_API}/categories`);
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { categories, loading };
}

const ListOfCategories = () => {
  const { categories, loading } = useCategoryData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        console.log(showFixed);
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener("scroll", onScroll);
      //limpiar el efecto
      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};

export { ListOfCategories };
