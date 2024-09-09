import { useNavigate } from "react-router-dom";

import { MdOutlineArrowRight } from "react-icons/md";
import RegisterForm from "../components/registerForm";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { setUserLogin, setUserRegister } = context;

  const handleClick = () => {
    navigate("/toDo-login");
  };

  const handleClickHome = () => {
    navigate("/");
    setUserLogin(false);
    setUserRegister(false);
  };
  return (
    <main className="p-16">
      <div className="w-full  h-16 mb-2 flex justify-between items-center px-2 cursor-pointer">
        <h3 className="text-4xl font-bold cursor-default">
          Página de Cadastro
        </h3>

        <button
          onClick={() => handleClick()}
          className="flex items-center gap-2"
        >
          {" "}
          <MdOutlineArrowRight /> Ir para a página de login
        </button>
      </div>
      <div className="w-full h-64 flex flex-col items-center gap-8 mt-16">
        <h3 className="font-semibold text-pretty italic">
          Preencha o formulário abaixo para efetuar o seu cadastro
        </h3>
        <RegisterForm />
      </div>

      <div className="fixed bottom-10 ">
        <button
          onClick={() => handleClickHome()}
          className="flex items-center gap-2"
        >
          {" "}
          <MdOutlineArrowRight /> Ir para a página Home
        </button>
      </div>
    </main>
  );
}
