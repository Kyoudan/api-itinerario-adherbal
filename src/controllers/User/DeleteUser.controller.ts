import { Response } from "express";
import { UserType } from "../../types/UserType";
import * as bcrypt from "bcrypt";
import prismaClient from "../../database/prismaClient";

export const DeleteUserController = async (req: UserType, res: Response) => {
  try {
    const { password } = req.body;
    const user = req.user;

    if (!password) return res.status(400).json({ message: "Senha invalida!!" });
    if (!user)
      return res.status(500).json({ message: "Erro ao obter os dados" });

    const userDices = await prismaClient.users.findUnique({
      where: {
        id: user.id,
      },
    });
    if (userDices) {
      const verifyPassword = bcrypt.compareSync(password, userDices?.password);

      if (verifyPassword) {
        await prismaClient.users.delete({
          where: {
            id: user.id,
          },
        });
        res.status(200).json({ message: "Conta deletada com sucesso!!" });
      } else {
        res.status(400).json({ message: "Senha invalida!!" });
      }
    } else {
      res.status(500).json({ message: "Erro ao obter os dados" });
    }
  } catch {
    res.status(500).json({ message: "Erro ao deletar usuario" });
  }
};
