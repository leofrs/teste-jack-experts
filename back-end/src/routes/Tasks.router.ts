import { Router } from "express";
import { TasksController } from "../controllers/Tasks.Controller";
import { auth } from "../middleware/auth";

export const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.post(
  "/api/auth/task/create-task",
  auth,
  tasksController.createTask
);

tasksRouter.get(
  "/api/auth/home/get-all-tasks",
  auth,
  tasksController.getAllTasks
);

tasksRouter.post(
  "/api/auth/task/edit-task",
  auth,
  tasksController.editTaskById
);

tasksRouter.get(
  "/api/auth/task/get-task/:id",
  auth,
  tasksController.getTaskById
);

tasksRouter.delete(
  "/api/auth/task/delete-task/:id",
  auth,
  tasksController.deleteTaskById
);
