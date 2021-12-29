import { render } from "./react-dom/index.js";
import * as EXPDS from "./component/title.js";

render(EXPDS.AvatarStyled(EXPDS.avatar), window.container);
render(EXPDS.TitleStyled(EXPDS.Title), window.container);
render(EXPDS.DescripcionStyled(EXPDS.descripcion), window.container);
render(EXPDS.HoraStyled(EXPDS.h), window.container);
