import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  descricao: string;
};

export default function FormAddTasks() {
  const {
    register,
    handleSubmit,
    /* watch, */
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-[250px] h-60 rounded overflow-hidden mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("title", { required: true })}
          className="border border-gray-400 p-2"
          placeholder="Insira sua tarefa aqui"
        />
        {errors.title && (
          <span className="text-red-700">O campo titulo é obrigatorio</span>
        )}

        <input
          type="submit"
          value="Criar"
          className="border border-red-500 cursor-pointer"
        />
      </form>
    </div>
  );
}
