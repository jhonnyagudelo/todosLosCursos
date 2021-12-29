import React from "react";
import "../css/icon.css";

function Icon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {}
    </span>
  );
}

export { Icon };
