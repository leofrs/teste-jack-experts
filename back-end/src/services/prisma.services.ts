import { PrismaClient, User } from "@prisma/client";
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

  findAllUsers = async (): Promise<User[]> => {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      console.error(
        "Error ao buscar todos os usuários no Prisma Service:",
        error
      );
      throw error;
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

  async getAllTask(userId: number) {
    try {
      const findAll = await prisma.tarefas.findMany({
        where: {
          authorId: userId,
        },
      });
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

  async editById(id: number, title: string, descricao: string) {
    try {
      const edit = await prisma.tarefas.update({
        where: {
          id: id,
        },
        data: {
          title: title,
          descricao: descricao,
        },
      });
      return edit;
    } catch (error) {
      console.error("Error ao editar a tarefa vindo do prima Service:", error);
    } finally {
      await prisma.$disconnect();
    }
  }

  async deleteById(id: number) {
    try {
      const del = await prisma.tarefas.delete({
        where: {
          id: id,
        },
      });
      return del;
    } catch (error) {
      console.error("Error ao excluir a tarefa vindo do prima Service:", error);
    } finally {
      await prisma.$disconnect();
    }
  }

  async getTaskId(id: number) {
    try {
      const getById = await prisma.tarefas.findUnique({
        where: {
          id: id,
        },
      });
      return getById;
    } catch (error) {
      console.error(
        "Error ao buscar uma tarefa vindo do prima Service:",
        error
      );
    } finally {
      await prisma.$disconnect();
    }
  }
}
