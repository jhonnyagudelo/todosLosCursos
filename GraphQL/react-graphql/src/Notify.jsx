import React from "react";
const Notify = ({ errorMessage }) => {
  if (!errorMessage) return null;
  return (
    <>
      <div style={{ color: "red", position: "fixed" }}>{errorMessage}</div>
    </>
  );
};
export { Notify };
