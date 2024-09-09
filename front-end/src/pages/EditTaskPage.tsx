import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TasksApi } from "../api/tasks";

export default function EditTaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const taskApi = new TasksApi();
    async function fetchTask() {
      try {
        const task = await taskApi.getTaskById(id);
        setTask(task);
      } catch (error) {
        console.error("Failed to fetch task:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTask();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!task) return <div>Task not found</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
    </div>
  );
}
