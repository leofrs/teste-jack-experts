import { useState, useEffect } from "react";
import ModalAdd from "../modalUpdate";
import FormUpdateTask from "../formUpdate";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { TasksApi } from "../../api/tasks";

export default function CardHome() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const taskApi = new TasksApi();

  const handleEditClick = async (id: number) => {
    try {
      const edit = await taskApi.getTaskById(id);
      if (edit) {
        setTaskToEdit(edit);
        setModalOpen(true);
      } else {
        alert("Um erro inesperado aconteceu! Tente novamente");
      }
    } catch (error) {
      alert("Um erro foi encontrado, tente novamente mais tarde: " + error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setTaskToEdit(null);
  };

  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasksFromApi = await taskApi.getAllTasks();
        const tasksWithState = tasksFromApi.map((task: any) => ({
          ...task,
          isChecked: false,
        }));

        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
          const parsedSavedTasks = JSON.parse(savedTasks);
          tasksWithState.forEach((task) => {
            const savedTask = parsedSavedTasks.find(
              (t: any) => t.id === task.id
            );
            if (savedTask) {
              task.isChecked = savedTask.isChecked;
            }
          });
        }

        setTasks(tasksWithState);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [taskApi]);

  const handleCheckboxChange = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDelete = async (id: number) => {
    try {
      await taskApi.deleteTaskId(id);
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      alert("Um erro foi encontrado, tente novamente mais tarde: " + error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap w-full h-[500px] px-8 gap-2 overflow-y-scroll max-sm:p-0 max-sm:h-[650px] ">
      {tasks.map((item) => (
        <div
          key={item.id}
          className="w-full h-24 rounded shadow-lg mt-8 border border-[#f38545] "
        >
          <div className="w-full h-full">
            <div className="flex h-full justify-around items-center">
              <div className="w-3/4 h-full flex gap-8 items-center">
                <input
                  type="checkbox"
                  title="checkbox for tasks"
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="accent-emerald-500/25"
                />
                <div className="w-3/4">
                  <h4
                    className={`max-sm:text-xs font-bold text-xl mb-2 text-start ${
                      item.isChecked ? "line-through" : ""
                    }`}
                  >
                    {item.title}
                  </h4>
                  <div
                    className={` text-gray-700 font-medium text-sm italic text-start ${
                      item.isChecked ? "line-through" : ""
                    }`}
                  >
                    {item.descricao ? (
                      item.descricao
                    ) : (
                      <p>Nenhuma descrição adicionada</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center max-sm:flex-col max-sm:gap-8">
                <button type="button" onClick={() => handleEditClick(item.id)}>
                  <FaRegEdit />
                </button>
                <button type="button" onClick={() => handleDelete(item.id)}>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isModalOpen && taskToEdit && (
        <ModalAdd isOpen={isModalOpen} onClose={closeModal}>
          <FormUpdateTask task={taskToEdit} onClose={closeModal} />
        </ModalAdd>
      )}
    </div>
  );
}
