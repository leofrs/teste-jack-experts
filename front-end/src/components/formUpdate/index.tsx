import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  descricao: string;
};

export default function FormUpdateTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-[250px] h-60 rounded overflow-hidden mt-16">
      <h4 className="text-center mb-2 font-semibold text-xl">
        Adicione a sua categoria
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("title", { required: true })}
          className="border border-gray-400 p-2"
          placeholder="Insira a categoria"
        />
        {errors.title && (
          <span className="text-red-700">O campo titulo é obrigatorio</span>
        )}

        <input
          {...register("descricao")}
          className="border border-gray-400 p-2"
          placeholder="Insira a descrição (opcional)"
        />

        <input
          type="submit"
          value="Criar"
          className="border border-red-500 cursor-pointer rounded-full font-semibold hover:bg-[#DD7F10] hover:text-white"
        />
      </form>
    </div>
  );
}
