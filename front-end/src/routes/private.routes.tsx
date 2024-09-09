import { Routes, Route } from "react-router-dom";

import HomeTaskPage from "../pages/HomeTaskPage";
import AddPage from "../pages/AddPage";

export const PrivateRouter = () => (
  <Routes>
    <Route path="/" element={<HomeTaskPage />} />
    <Route path="/toDo-add-task" element={<AddPage />} />
  </Routes>
);
