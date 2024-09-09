import { useForm, SubmitHandler } from "react-hook-form";
import { TasksApi } from "../../api/tasks";

type Inputs = {
  title: string;
  descricao: string;
};

type FormUpdateTaskProps = {
  task: { id: number; title: string; descricao: string };
  onClose: () => void;
};

export default function FormUpdateTask({ task, onClose }: FormUpdateTaskProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: task.title,
      descricao: task.descricao,
    },
  });

  const taskApi = new TasksApi();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await taskApi.editTaskById(task.id, data.title, data.descricao);
      alert("Tarefa atualizada com sucesso!");
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
      alert("Erro ao atualizar a tarefa.");
    }
  };

  return (
    <div className="w-[250px] h-80 rounded overflow-hidden mt-16 p-4 ">
      <h4 className="text-center mb-2 font-semibold text-xl">
        Editar Tarefa: {task.title}
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("title", { required: "O campo título é obrigatório" })}
          className="border border-gray-400 p-2 rounded"
          placeholder="Insira o título"
        />
        {errors.title && (
          <span className="text-red-700">{errors.title.message}</span>
        )}

        <textarea
          {...register("descricao")}
          className="border border-gray-400 p-2 rounded"
          placeholder="Insira a descrição (opcional)"
        />

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="border border-red-500 cursor-pointer rounded-full font-semibold bg-orange-500 text-white hover:bg-orange-600 p-4"
          >
            Atualizar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-gray-500 cursor-pointer rounded-full font-semibold bg-gray-500 text-white hover:bg-gray-600 p-4"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
