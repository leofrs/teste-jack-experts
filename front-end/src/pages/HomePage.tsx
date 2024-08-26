import { useNavigate } from "react-router-dom";
import CardHome from "../components/cardHome";

import { FaRegMoon } from "react-icons/fa";
// import { IoSunnyOutline } from "react-icons/io5";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/todoJack-add");
  };
  return (
    <main className="p-16">
      <div className="flex justify-between items-center border border-[#DD7F10] w-full h-auto px-8 mb-8 cursor-default">
        <h1 className="text-4xl font-bold">Todo List</h1>
        <p className="cursor-pointer">
          <FaRegMoon />
        </p>
      </div>

      <CardHome />

      <div
        className="w-16 h-16 flex items-center justify-center absolute right-16 bottom-16 rounded-lg bg-[#DD7F10] cursor-pointer"
        onClick={() => handleClick()}
      >
        <button className="text-center text-white font-bold">+</button>
      </div>
    </main>
  );
}
