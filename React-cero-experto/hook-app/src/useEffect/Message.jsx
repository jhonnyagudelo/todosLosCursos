import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCorrds] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCorrds(coords);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <>
      <h1>Holiii</h1>
      <p>
        X:{x} Y:{y}
      </p>
    </>
  );
};
export { Message };
