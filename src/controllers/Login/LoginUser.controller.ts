import { Request, Response } from "express";
import { config } from "dotenv";
import prismaClient from "../../database/prismaClient";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
config();

const jwt_secret: string = process.env.JWT_SECRET as string;

export const LoginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Email invalido" });
    if (!password) return res.status(400).json({ message: "Senha invalida" });

    const lowerEmail = email.toLowerCase();

    const user = await prismaClient.users.findFirst({
      where: {
        email: lowerEmail,
      },
    });

    if (!user?.activated)
      return res.status(401).json({ message: "Conta não ativada!!" });

    if (user) {
      const verifyPassword = bcrypt.compareSync(password, user.password);
      if (verifyPassword) {
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          jwt_secret,
          {
            expiresIn: 3600,
            algorithm: "HS512",
          }
        );
        return res.status(200).json(token);
      }
    }
    return res.status(400).json({ message: "Credenciais invalidas" });
  } catch {
    return res.status(500).json({ message: "Erro ao efetuar o login" });
  }
};
