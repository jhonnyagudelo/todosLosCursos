import React from "react";
import ReactDOM from "react-dom/client";
//import { HookApp } from "./HookApp";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./useEffect/simpleForm";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
);
