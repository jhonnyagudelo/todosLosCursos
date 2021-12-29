import React from "react";
import "../css/TodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className="CreateTodoButton" type="submit" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
