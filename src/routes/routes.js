import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import { Error, Home, LogIn, SignUp } from "../pages";

export const routes = new createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
