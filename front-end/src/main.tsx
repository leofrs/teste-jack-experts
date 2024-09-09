import { createRoot } from "react-dom/client";
import "./index.css";
import { UserProvider } from "./context/userContext.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
