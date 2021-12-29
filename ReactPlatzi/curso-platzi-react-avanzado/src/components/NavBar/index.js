import React from "react";
import { Nav, Link } from "./styled";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
const SIZE = "30px";

const NavBar = () => {
  return (
    <Nav>
      <Link exact to="/">
        <MdHome size={SIZE} />
      </Link>
      <Link exact to="/Favs">
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link exact to="/User">
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
};

export { NavBar };
