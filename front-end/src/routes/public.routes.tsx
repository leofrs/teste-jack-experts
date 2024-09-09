import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

export const PublicRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/toDo-login" element={<LoginPage />} />
    <Route path="/toDo-register" element={<RegisterPage />} />
  </Routes>
);
