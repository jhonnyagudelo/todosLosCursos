import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./contex/AppContenx";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://petgram-server-jhonnyagudelo.vercel.app/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,

  document.getElementById("app")
);
