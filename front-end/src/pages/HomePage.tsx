//import { useNavigate } from "react-router-dom";
import CardHome from "../components/cardHome";

import { FaRegMoon } from "react-icons/fa";
// import { IoSunnyOutline } from "react-icons/io5";

import ModalAdd from "../components/modalAdd";
import { useState } from "react";
import FormAdd from "../components/formAdd";

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  /* 
  }; */
  return (
    <main className="p-16">
      <div className="flex justify-between items-center w-full h-auto px-8 mb-8 cursor-default">
        <h1 className="text-4xl font-bold">Todo List</h1>
        <p className="cursor-pointer">
          <FaRegMoon />
        </p>
      </div>

      <CardHome />

      <ModalAdd isOpen={isModalOpen} onClose={closeModal}>
        <FormAdd />
      </ModalAdd>

      <div
        className="w-16 h-16 flex items-center justify-center absolute right-16 bottom-14 rounded-lg bg-[#f38545] cursor-pointer"
        onClick={openModal}
      >
        <button className="text-center text-white font-bold">+</button>
      </div>
    </main>
  );
}
