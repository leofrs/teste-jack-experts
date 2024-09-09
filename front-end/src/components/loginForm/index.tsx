import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const context = useContext(UserContext);
  const { setUser, setIsAuthenticated } = context;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.token) {
        localStorage.setItem("token", result.token);
        setUser(data.email);
        setIsAuthenticated(true);
        navigate("/toDo-homeTasks", { replace: true });
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-[350px] h-96 rounded  border border-[#f38545] p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("email", { required: true })}
          className="border border-gray-400 p-2"
          placeholder="Insira e-mail aqui"
        />
        {errors.email && (
          <span className="text-red-700">O campo e-mail é obrigatorio</span>
        )}

        <input
          {...register("password")}
          className="border border-gray-400 p-2"
          placeholder="Insira a senha aqui"
        />
        {errors.password && (
          <span className="text-red-700">O campo password é obrigatorio</span>
        )}
        <input
          type="submit"
          value="Entrar"
          className="border border-red-500 cursor-pointer"
        />
      </form>
    </div>
  );
}
