import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routerIndex } from "./routes/index.tsx";
import { UserProvider } from "./context/userContext.tsx";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <RouterProvider router={routerIndex} />
  </UserProvider>
);
