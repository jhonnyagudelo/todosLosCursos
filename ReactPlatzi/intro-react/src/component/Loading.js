import React from "react";
import "../css/Loading.css";

function Loading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando ToDo...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { Loading };
