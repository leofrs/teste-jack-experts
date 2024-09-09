import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ProtectedLayout from "../pages/ProtectedLayout";
import HomeTaskPage from "../pages/HomeTaskPage";
import AddPage from "../pages/AddPage";

export const RouterIndex = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/toDo-login" element={<LoginPage />} />
    <Route path="/toDo-register" element={<RegisterPage />} />
    <Route path="/toDo-homeTasks" element={<ProtectedLayout />}>
      <Route index element={<HomeTaskPage />} />
      <Route path="toDo-add-task" element={<AddPage />} />
    </Route>
  </Routes>
);
