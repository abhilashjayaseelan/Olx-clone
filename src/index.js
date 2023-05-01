import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App";
import { FirebaseContext } from './store/FirebaseContext'
import firebase from "./firebase/config";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <RouterProvider router={appRouter} />
  </FirebaseContext.Provider>
);
