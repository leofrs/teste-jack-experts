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

tasksRouter.get("/api/auth/home/get-all-tasks", auth);
