import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Contador from "./Components/Contador";
import GetUsers from "./Components/GetUsers";

function App() {
  return (
    <>
      <Provider store={store}>
        <Contador />

        <GetUsers />
      </Provider>
    </>
  );
}

export default App;
