import { Request, Response } from "express";
import { PrismaTask } from "../services/prisma.services";
import { CustomRequest } from "../middleware/auth";

export type TaskInformations = {
  authorId: number;
  title: string;
  descricao?: string;
};

const prismaTask = new PrismaTask();

export class TasksController {
  async createTask(req: CustomRequest, res: Response) {
    const { title, descricao } = req.body as TaskInformations;
    const userId = req.token?.userId;

    if (!title || !userId) {
      console.log({ title: title, userId: userId });

      return res.status(400).send("Title e userId são obrigatorios.");
    }
    try {
      const create = await prismaTask.createTask({
        title,
        descricao,
        authorId: Number(userId),
      });
      res.status(201).json(create);
    } catch (error) {
      res.status(501).json({ Error: "Error interno encontrado: " + error });
    }
  }

  async getAllTasks(req: Request, res: Response) {
    try {
      const getall = await prismaTask.getAllTask();

      if (!getall) {
        res
          .status(200)
          .json({ Sucesso: "Nenhuma tarefa foi encontrada no banco de dados" });
      } else {
        res.status(200).json(getall);
      }
    } catch (error) {
      res
        .status(501)
        .json({ Error: `Um erro interno foi detectado: ${error}` });
    }
  }

  async getTaskById(req: Request, res: Response) {
    try {
      const taskId = req.params.id;
      const task = await prismaTask.getTaskId(Number(taskId));

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      res.json(task);
    } catch (error) {
      console.error("Error fetching task:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async editTaskById(req: Request, res: Response) {
    const { id, title, descricao } = req.body;
    if (!id && !title) {
      res
        .status(401)
        .json({ Error: `Os campos id e title não podem estar vázios` });
    }
    try {
      const edit = prismaTask.editById(id, title, descricao);
      if (!edit) {
        res
          .status(301)
          .json({ Error: `Um error foi encontrado! Tente novamente` });
      } else {
        res.status(201).json({ Sucesso: `Tarefa editada com sucesso` });
      }
    } catch (error) {
      res.status(501).json({ Error: `Error interno encontrado: ${error}` });
    }
  }

  async deleteTaskById(req: Request, res: Response) {
    const { id } = req.body;
    if (!id) {
      res.status(401).json({ Error: `Os campos id  não pode estar vázios` });
    }
    try {
      const del = prismaTask.deleteById(id);
      if (!del) {
        res
          .status(301)
          .json({ Error: `Um error foi encontrado! Tente novamente` });
      } else {
        res.status(201).json({ Sucesso: `Tarefa delatada com sucesso` });
      }
    } catch (error) {
      res.status(501).json({ Error: `Error interno encontrado: ${error}` });
    }
  }
}
