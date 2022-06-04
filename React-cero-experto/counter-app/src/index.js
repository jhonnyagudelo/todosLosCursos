import React from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./index.css";
import { PrimeraApp } from "./PrimeraApp";

const divRoot = document.querySelector("#app");
const root = createRoot(divRoot);
root.render(<PrimeraApp saludo="Hola, soy goku" />);
