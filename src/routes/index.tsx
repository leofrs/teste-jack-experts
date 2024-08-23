import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";

export const routerIndex = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);
