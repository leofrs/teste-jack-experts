import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import AddPage from "../pages/AddPage";

export const routerIndex = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todoJack-add",
    element: <AddPage />,
    errorElement: <ErrorPage />,
  },
]);
