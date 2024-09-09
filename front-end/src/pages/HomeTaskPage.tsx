import CardHome from "../components/cardHome";

import { FaRegMoon } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function HomeTaskPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/toDo-jack-add");
  };

  return (
    <main className="p-16">
      <div className="flex justify-between items-center w-full h-auto px-8 mb-8 cursor-default">
        <h1 className="text-4xl font-bold">Todo List</h1>
        <p className="cursor-pointer">
          <FaRegMoon />
        </p>
      </div>

      <CardHome />

      <div
        className="w-16 h-16 flex items-center justify-center absolute right-16 bottom-14 rounded-lg bg-[#f38545] cursor-pointer"
        onClick={() => handleClick()}
      >
        <button className="text-center text-white font-bold">+</button>
      </div>
    </main>
  );
}
