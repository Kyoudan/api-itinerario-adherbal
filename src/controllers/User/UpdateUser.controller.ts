import { Response } from "express";
import prismaClient from "../../database/prismaClient";
import { UserType } from "../../types/UserType";

export const UpdateUserController = async (req: UserType, res: Response) => {
  try {
    const { name, email, description } = req.body;
    const user = req.user;

    if (!user)
      return res.status(500).json({ message: "Erro ao obter os dados!!" });

    const result = await prismaClient.users.update({
      data: {
        name,
        email,
        description,
      },
      where: {
        id: user.id,
      },
    });
    if (result) {
      res.status(200).json({ message: "Dados atualizados com sucesso!!" });
    } else {
      res.status(500).json({ message: "Erro ao atualizar os dados" });
    }
  } catch {
    res.status(500).json({ message: "Erro ao atualizar os dados" });
  }
};
