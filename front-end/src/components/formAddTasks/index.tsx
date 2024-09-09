import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  descricao: string;
};

export default function FormAddTasks() {
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
          {...register("title", { required: true })}
          className="border border-gray-400 p-2"
          placeholder="Insira o titulo aqui"
        />
        {errors.title && (
          <span className="text-red-700">O campo titulo é obrigatorio</span>
        )}

        <input
          {...register("descricao")}
          className="border border-gray-400 p-2"
          placeholder="Insira a descrição aqui"
        />

        <input
          type="submit"
          value="Criar"
          className="border border-red-500 cursor-pointer"
        />
      </form>
    </div>
  );
}
