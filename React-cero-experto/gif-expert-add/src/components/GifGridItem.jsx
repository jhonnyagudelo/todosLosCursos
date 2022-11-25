import React from "react";
const GifGridItem = ({ title, url }) => {
  return (
    <>
      <article className="card animate__animated animate__fadeIn__delay-2s">
        <img src={url} alt={title} />
        <p>{title}</p>
      </article>
    </>
  );
};
export { GifGridItem };
