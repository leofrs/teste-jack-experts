import { useForm, SubmitHandler } from "react-hook-form";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
