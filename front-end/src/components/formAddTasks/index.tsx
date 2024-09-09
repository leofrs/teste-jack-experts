import { useForm, SubmitHandler } from "react-hook-form";
import { TasksApi } from "../../api/tasks";
import { useNavigate } from "react-router-dom";

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

  const taskApi = new TasksApi();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const create = await taskApi.createTask(data.title, data.descricao);

      if (create) {
        alert("Tarefa criada com sucesso");
        navigate("/toDo-homeTasks");
      } else {
        alert("Algo de errado aconteceu! Tente novamente");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

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
          placeholder="Insira a descrição aqui (opcional)"
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
