import React from "react";
import ReactDOM from "react-dom";
//BrowserRouter from react-router-dom is used for ROUTING
import { BrowserRouter } from "react-router-dom";

//Importing the named export "FavoritesContextProvider" which will be used to wrap around components interested in listening to CONTEXT
import { FavoritesContextProvider } from "./store/favorites-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
