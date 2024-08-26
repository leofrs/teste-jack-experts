import { useNavigate } from "react-router-dom";
import FormAdd from "../components/formAdd";

export default function AddPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <main className="p-16">
      <div className="w-full border border-red-400 h-16 mb-2 flex justify-between items-center px-2">
        <button onClick={() => handleClick()}>Voltar para a home</button>

        <h3>Add Page</h3>
      </div>
      <div className="w-full h-auto border border-blue-400 h-64 flex flex-col items-center">
        <FormAdd />
      </div>
    </main>
  );
}
