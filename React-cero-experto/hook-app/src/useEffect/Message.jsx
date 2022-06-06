import React, { useEffect } from "react";
const Message = () => {
  useEffect(() => {
    console.log("componente montado");
    return () => {
      console.log("componente desmontado");
    };
  });

  return (
    <>
      <h1>Holiii</h1>
    </>
  );
};
export { Message };
