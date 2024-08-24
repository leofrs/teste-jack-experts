import { cardsItems } from "../../cards";

import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function CardHome() {
  return (
    <div className="flex justify-between flex-wrap w-full h-full border border-[#DD7F10] px-8 gap-2">
      {cardsItems.map((item) => {
        return (
          <div className="w-[250px] h-60 rounded overflow-hidden shadow-lg mt-8 border">
            <div key={item.id} className="w-full h-full ">
              <div className="w-full border-b border-gray-200 flex justify-between items-center px-4">
                <h4 className=" font-bold text-xl mb-2">{item.title}</h4>
                <button>
                  <BsThreeDots />
                </button>
              </div>

              <div className="w-full h-full flex flex-col gap-8 pt-6 ">
                <div className=" w-full flex gap-6 px-6">
                  <input type="checkbox" name="" id="" />
                  <p>Fazer Comida</p>
                  <div className="flex gap-2 items-center">
                    <FaRegEdit />
                    <AiOutlineDelete />
                  </div>
                </div>
                <div className=" w-full flex gap-6 px-6">
                  <input type="checkbox" name="" id="" />
                  <p>Fazer Comida</p>
                  <div className="flex gap-2 items-center">
                    <FaRegEdit />
                    <AiOutlineDelete />
                  </div>
                </div>
                <div className=" w-full flex gap-6 px-6">
                  <input type="checkbox" name="" id="" />
                  <p>Fazer Comida</p>
                  <div className="flex gap-2 items-center">
                    <FaRegEdit />
                    <AiOutlineDelete />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
