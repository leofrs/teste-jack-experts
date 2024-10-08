import { useNavigate } from "react-router-dom";

import { MdOutlineArrowBack } from "react-icons/md";
import FormAddTasks from "../components/formAddTasks";

export default function AddPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/toDo-homeTasks");
  };

  return (
    <main className="p-16">
      <div className="w-full  h-16 mb-2 flex justify-between items-center px-2 cursor-pointer">
        <h3 className="text-4xl font-bold">Página Adicionar Tarefa</h3>

        <button
          onClick={() => handleClick()}
          className="flex items-center gap-2"
        >
          {" "}
          <MdOutlineArrowBack /> Voltar para a home
        </button>
      </div>
      <div className="w-full h-64 flex flex-col items-center gap-8 mt-16">
        <h3 className="font-semibold text-pretty italic">
          Preencha o formulário abaixo para adicionar a sua tarefa
        </h3>
        <FormAddTasks />
      </div>
    </main>
  );
}
