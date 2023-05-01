import React from "react";
import ReactDOM from "react-dom/client";
import appRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { FirebaseContext } from "./store/Context";
import Context from "./store/Context";
import firebase from "./firebase/config";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <RouterProvider router={appRouter} />
    </Context>
  </FirebaseContext.Provider>
);
