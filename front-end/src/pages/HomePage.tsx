import ImageBg from "../assets/bg-image.png";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function HomePage() {
  const context = useContext(UserContext);
  const { navigate } = context;

  const DefaultPage = () => (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">
        TO-DO <span>LIST</span>
      </h1>
      <p className="italic">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
        quae obcaecati, voluptatem inventore sint harum repellat commodi eum
        dicta natus amet, labore aliquid necessitatibus ab totam possimus eaque
        corrupti provident?
      </p>
      <div className="mt-8 w-full flex justify-evenly">
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2"
          onClick={() => navigate("/toDo-login")}
        >
          Login
        </button>
        <button
          type="button"
          className="border border-gray-500 rounded-full px-8 py-2"
          onClick={() => navigate("/toDo-Register")}
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );

  return (
    <main className="p-16 w-full h-screen flex">
      <div className="w-2/4 h-full flex flex-col items-center justify-center">
        <DefaultPage />
      </div>
      <div className="w-2/4 flex flex-col justify-center">
        <img src={ImageBg} alt="to-do image" />
      </div>
    </main>
  );
}
