import { Router } from "express";
import { TasksController } from "../controllers/Tasks.Controller";
//import { auth } from "../middleware/auth";

export const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.post(
    "/api/auth/task/create-task",

    tasksController.createTask
);

tasksRouter.get(
    "/api/auth/home/get-all-tasks",

    tasksController.getAllTasks
);

tasksRouter.post(
    "/api/auth/task/edit-task",

    tasksController.editTaskById
);

tasksRouter.get(
    "/api/auth/task/get-task/:id",

    tasksController.getTaskById
);

tasksRouter.delete(
    "/api/auth/task/delete-task/:id",

    tasksController.deleteTaskById
);
