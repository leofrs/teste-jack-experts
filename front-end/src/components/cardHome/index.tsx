import { cardsItems } from "../../cards";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

import { useState } from "react";
import ModalAdd from "../modalUpdate";
import FormUpdateTask from "../formUpdate";

export default function CardHome() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex  flex-wrap w-full h-[580px] px-8 gap-2 overflow-x-scroll">
      {cardsItems.map((item) => (
        <div
          key={item.id}
          className="w-full h-24 rounded overflow-hidden shadow-lg mt-8 border"
        >
          <div className="w-full h-full">
            <div className="flex h-full justify-around items-center">
              <div className="w-3/4 h-full  flex gap-8 items-center">
                <input
                  type="checkbox"
                  placeholder="checkbox"
                  className="accent-emerald-500/25"
                />
                <div>
                  <h4 className="font-bold text-xl mb-2 text-center">
                    {item.title}
                  </h4>
                  <p className="font-thin text-gray-600 text-sm italic">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <button type="button" onClick={() => openModal()}>
                  <FaRegEdit />
                </button>
                <button type="button">
                  <AiOutlineDelete />
                </button>
              </div>
              <ModalAdd isOpen={isModalOpen} onClose={closeModal}>
                <FormUpdateTask />
              </ModalAdd>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
