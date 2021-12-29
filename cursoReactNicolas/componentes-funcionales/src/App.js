import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    console.log(ref.current);
    ref.current.innerHTML = "holaaaa";
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div ref={ref} onClick={click}>
        lalaal
      </div>
    </div>
  );
};
export { App };
