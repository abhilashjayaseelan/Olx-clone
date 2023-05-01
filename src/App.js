import React, { useContext, useEffect } from "react";
import { createBrowserRouter as Router, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import Post from "./store/PostContext";
import { AuthContext, FirebaseContext } from "./store/Context";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <>
      <Post>
        <Outlet />
      </Post>
    </>
  );
}

const appRouter = Router([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "view",
        element: <ViewPost />,
      },
    ],
  },
]);

export default appRouter;
