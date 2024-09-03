import { useNavigate } from "react-router-dom";

import { MdOutlineArrowBack } from "react-icons/md";
import FormAddTasks from "../components/formAddTasks";

export default function AddPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <main className="p-16">
      <div className="w-full  h-16 mb-2 flex justify-between items-center px-2 cursor-pointer">
        <button
          onClick={() => handleClick()}
          className="flex items-center gap-2"
        >
          {" "}
          <MdOutlineArrowBack /> Voltar para a home
        </button>

        <h3>Add Page</h3>
      </div>
      <div className="w-full border border-blue-400 h-64 flex flex-col items-center">
        <FormAddTasks />
      </div>
    </main>
  );
}
