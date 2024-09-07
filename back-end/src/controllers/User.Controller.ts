import { Request, Response } from "express";

import { PrismaUser } from "../services/prisma.services";
import { BcryptUtil } from "../utils/bcrypt.utils";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middleware/auth";

const prismaQuery = new PrismaUser();
const bcryptUtil = new BcryptUtil();

export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegister = {
  name: string;
  email: string;
  password: string;
};

export class UserControllers {
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body as UserRegister;

    if (!name && !email && !password) {
      return res
        .status(400)
        .json({ Error: "Nome, Email e Senha são obrigatórios" });
    }

    try {
      const existingUser = await prismaQuery.findUser(email);

      if (existingUser) {
        return res.status(409).json({ Error: "Email já cadastrado" });
      }

      const hashPassword = await bcryptUtil.hashedPassword(password);

      const createUser = await prismaQuery.userRegister({
        name,
        email,
        hashPassword,
      });

      if (createUser) {
        res.status(201).json({ Suucesso: "Usúario cadastrado com sucesso" });
      } else {
        res.status(401).json({ Error: "Usuário não criado" });
      }
    } catch (error: any) {
      res.status(500).json({
        Error: `Error interno encontrado: ${error}`,
      });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body as UserLogin;

    if (!email && !password) {
      return res.status(400).json({ Error: "Email e Senha são obrigatórios" });
    }
    try {
      const findUser = await prismaQuery.findUser(email);

      if (!findUser) {
        return res.status(401).json({ error: "Usuário não encontrado!" });
      }

      const isPasswordValid = await bcryptUtil.comparePassword(
        password,
        findUser.password
      );

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Senha inválida!" });
      }

      const token = jwt.sign({ userId: findUser.id }, SECRET_KEY, {
        expiresIn: "1h",
      });

      res.json({ findUser, token: token });
    } catch (error: any) {
      res.status(500).json({ Error: `Error interno encontrado: ${error}` });
    }
  }
}
