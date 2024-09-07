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
}
