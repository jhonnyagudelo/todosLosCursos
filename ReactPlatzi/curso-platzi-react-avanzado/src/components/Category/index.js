import React from "react";
import { Anchor, Image } from "./styled";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path = "#", emoji = "?" }) => (
  <Anchor to={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);

export { Category };
