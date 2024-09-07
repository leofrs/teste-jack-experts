import { PrismaClient } from "@prisma/client";
import { TaskInformations } from "../controllers/Tasks.Controller";

const prisma = new PrismaClient();

type UserRegisterWithHash = {
  name: string;
  email: string;
  hashPassword: string;
};

export class PrismaUser {
  userRegister = async ({
    name,
    email,
    hashPassword,
  }: UserRegisterWithHash) => {
    try {
      const create = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashPassword,
        },
      });
      return create;
    } catch (error) {
      console.error("Error ao criar o usúario vindo do prima Service:", error);
    } finally {
      await prisma.$disconnect();
    }
  };

  findUser = async (email: string) => {
    try {
      const findUnique = await prisma.user.findUnique({
        where: { email: email },
      });
      return findUnique;
    } catch (error) {
      console.error("Error ao buscar o usúario vindo do prima Service:", error);
    } finally {
      await prisma.$disconnect();
    }
  };
}

export class PrismaTask {
  async createTask({ title, descricao, authorId }: TaskInformations) {
    if (typeof authorId !== "number" || authorId <= 0) {
      throw new Error("Invalid authorId");
    }
    try {
      const create = await prisma.tarefas.create({
        data: {
          title: title,
          descricao: descricao,
          author: {
            connect: { id: authorId },
          },
        },
      });
      return create;
    } catch (error) {
      console.error("Error ao criar tarefa vindo do prima Service:", error);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getAllTask() {
    try {
      const findAll = await prisma.tarefas.findMany();
      return findAll;
    } catch (error) {
      console.error(
        "Error ao buscar as tarefas vindo do prima Service:",
        error
      );
    } finally {
      await prisma.$disconnect();
    }
  }
}
