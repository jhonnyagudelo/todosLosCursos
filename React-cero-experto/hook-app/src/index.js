import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { CallbackHook } from "./memos/CallbackHook";
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
//import { MemoHook } from "./memos/MemoHook";
//import { Memorize } from "./memos/Memorize";
//import { Layout } from "./useLayoutEffect/Layout";
//import { RealExampleRef } from "./04-useRef/RealExampleRef";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { HookApp } from "./HookApp";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { MultipleCustomHoosk } from "./03-examples/MultipleCustomHooks";
//import { SimpleForm } from "./useEffect/simpleForm";
import MainApp from './09-useContext/MainApp';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
);
