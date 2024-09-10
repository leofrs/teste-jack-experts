import { useForm, SubmitHandler } from "react-hook-form";
import { UserApi } from "../../api/user";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const userApi = new UserApi();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await userApi.register(
        data.email,
        data.email,
        data.password
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result) {
        navigate("/toDo-login", { replace: true });
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-[350px] h-96 rounded  border border-[#f38545] p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name", { required: true })}
          className="border border-gray-400 p-2"
          placeholder="Insira o seu nome aqui"
        />
        {errors.name && (
          <span className="text-red-700">O campo nome é obrigatorio</span>
        )}

        <input
          {...register("email", { required: true })}
          className="border border-gray-400 p-2"
          placeholder="Insira o seu e-mail aqui"
        />
        {errors.email && (
          <span className="text-red-700">O campo e-mail é obrigatorio</span>
        )}

        <input
          {...register("password")}
          className="border border-gray-400 p-2"
          placeholder="Insira a sua senha aqui"
        />
        {errors.password && (
          <span className="text-red-700">O campo password é obrigatorio</span>
        )}
        <input
          type="submit"
          value="Cadastre-se"
          className="border border-red-500 cursor-pointer"
        />
      </form>
    </div>
  );
}
