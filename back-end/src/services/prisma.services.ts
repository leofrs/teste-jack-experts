import { PrismaClient } from "@prisma/client";
import { UserLogin, UserRegister } from "../controllers/User.Controller";

const prisma = new PrismaClient();

type UserRegisterWithHash = {
  name: string;
  email: string;
  hashPassword: string;
};

export class PrismaQuery {
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

  getAllUsersPrisma = async () => {
    try {
      const getAll = await prisma.user.findMany();
      return getAll;
    } catch (error) {
      console.error(
        "Error ao buscar todos os usúarios vindo do prima Service:",
        error
      );
    } finally {
      await prisma.$disconnect();
    }
  };
}
