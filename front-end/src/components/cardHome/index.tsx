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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const taskApi = new TasksApi();
    async function fetchTasks() {
      try {
        const tasks = await taskApi.getAllTasks();
        setTasks(tasks.map((task: any) => ({ ...task, isChecked: false })));
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  const handleCheckboxChange = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap w-full h-[580px] px-8 gap-2 overflow-x-scroll">
      {tasks.map((item) => (
        <div
          key={item.id}
          className="w-full h-24 rounded overflow-hidden shadow-lg mt-8 border border-[#f38545]"
        >
          <div className="w-full h-full ">
            <div className="flex h-full justify-around items-center">
              <div className="w-3/4 h-full flex gap-8 items-center">
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="accent-emerald-500/25"
                />
                <div className="w-3/4">
                  <h4
                    className={`font-bold text-xl mb-2 text-start ${
                      item.isChecked ? "line-through" : ""
                    }`}
                  >
                    {item.title}
                  </h4>
                  <div
                    className={`font-thin text-gray-600 text-sm italic text-start ${
                      item.isChecked ? "line-through" : ""
                    }`}
                  >
                    {item.descricao ? (
                      item.descricao
                    ) : (
                      <p>Nenhuma descricão adicionada</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <button type="button" onClick={() => openModal()}>
                  <FaRegEdit />
                </button>
                <button type="button">
                  <AiOutlineDelete />
                </button>
              </div>

              <ModalAdd isOpen={isModalOpen} onClose={closeModal}>
                <FormUpdateTask />
              </ModalAdd>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
