import styled from "../styled/index.js";
import { component as Component } from "../react/index.js";

export const TitleStyled = styled.h1`
  font-family: system-ui;
  color: red;
  font-size: 32px;
  margin: 0;
`;

export const AvatarStyled = styled.img`
  max-width: 100px;
  border-radius: 20%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
`;

export const DescripcionStyled = styled.p`
  font-family: system-ui;
  color: gray;
  font-size: 18px;
  margin: 0 0 16px;
`;

export const HoraStyled = styled.div`
  font-family: system-ui;
  color: gray;
`;

export const props = {
  name: "Jhonny Stiven Agudelo",
  avatar: "https://picsum.photos/200/300",
  descripcion: "hhhhhhhhhhhhhhhhh",
  h: "dddd",
};

export const Title = Component`${"name"}`(props);
export const avatar = Component`${"avatar"}`(props);
export const descripcion = Component`${"descripcion"}`(props);
export const h = Component`${"h"}`(props);
