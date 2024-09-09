import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AddPage from "../pages/AddPage";
import HomeTaskPage from "../pages/HomeTaskPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const routerIndex = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/toDo-login",
    element: <LoginPage />,
  },
  {
    path: "/toDo-register",
    element: <RegisterPage />,
  },
  {
    path: "/toDo-jack",
    element: <HomeTaskPage />,
  },
  {
    path: "/toDo-jack-add",
    element: <AddPage />,
  },
]);
