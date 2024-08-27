import { useState } from "react";
import { cardsItems } from "../../cards";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function CardHome() {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleOptionsClick = (id: number) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/todoJack-add");
  };
  return (
    <div className="flex justify-between flex-wrap w-full h-full border border-[#DD7F10] px-8 gap-2">
      {cardsItems.map((item) => (
        <div
          key={item.id}
          className="w-[250px] h-60 rounded overflow-hidden shadow-lg mt-8 border"
        >
          <div className="w-full h-full">
            <div className="w-full border-b border-gray-200 flex justify-between items-center px-4">
              <div className="flex flex-col items-start justify-start">
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="font-thin text-gray-600 text-sm italic">
                  {item.description}
                </p>
              </div>

              <button onClick={() => handleOptionsClick(item.id)}>
                <BsThreeDots />
              </button>

              {activeItemId === item.id && (
                <div className="absolute bg-white border border-gray-300 rounded shadow-lg p-2 mt-6 w-32 ">
                  <button
                    onClick={() => handleClick()}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Adicionar Tasks
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                    Excluir categoria
                  </button>
                </div>
              )}
            </div>

            <div className="w-full h-full flex flex-col gap-8 pt-6">
              <div className="w-full flex gap-6 px-6">
                <input type="checkbox" name="" id="" placeholder="" />
                <p>Fazer Comida</p>
                <div className="flex gap-2 items-center">
                  <FaRegEdit />
                  <AiOutlineDelete />
                </div>
              </div>
              <div className="w-full flex gap-6 px-6">
                <input type="checkbox" name="" id="" placeholder="" />
                <p>Fazer Comida</p>
                <div className="flex gap-2 items-center">
                  <FaRegEdit />
                  <AiOutlineDelete />
                </div>
              </div>
              <div className="w-full flex gap-6 px-6">
                <input type="checkbox" name="" id="" placeholder="" />
                <p>Fazer Comida</p>
                <div className="flex gap-2 items-center">
                  <FaRegEdit />
                  <AiOutlineDelete />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
