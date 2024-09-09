import LoginForm from "../components/loginForm";

import { MdOutlineArrowRight } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function LoginPage() {
  const context = useContext(UserContext);
  const { navigate } = context;

  const handleClickRegister = () => {
    navigate("/toDo-register");
  };
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <main className="p-16">
      <div className="w-full  h-16 mb-2 flex justify-between items-center px-2 cursor-pointer">
        <h3 className="text-4xl font-bold">Página de Login</h3>

        <button
          onClick={() => handleClickRegister()}
          className="flex items-center gap-2"
        >
          {" "}
          <MdOutlineArrowRight /> Ir para a página de Cadastro
        </button>
      </div>
      <div className="w-full h-64 flex flex-col items-center gap-8 mt-16">
        <h3 className="font-semibold text-pretty italic">
          Preencha o formulário abaixo para efetuar o seu login
        </h3>
        <LoginForm />
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
