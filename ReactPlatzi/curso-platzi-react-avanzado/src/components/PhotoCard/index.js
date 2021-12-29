import React, { Fragment } from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../favButton";
import { useToggleLikeMutation } from "../../hooks/useToggleLikeMutation";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const { mutation, mutationError, mutationLoading } = useToggleLikeMutation();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const handleFavClick = () => {
    !liked && mutation({ variables: { input: { id } } });
    setLiked(!liked);
  };

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  );
};

export { PhotoCard };
