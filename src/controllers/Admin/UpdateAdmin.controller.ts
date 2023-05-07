import prismaClient from "../../database/prismaClient";
import { UserType } from "../../types/UserType";
import { Response } from "express";

export const UpdateAdminController = async (req: UserType, res: Response) => {
  try {
    const { name, email, image } = req.body;
    const user = req.user;

    if (!user) return res.status(400).json({ message: "Adm não encontrado" });

    const lowerEmail = email.toLowerCase();

    await prismaClient.admins.update({
      data: {
        name,
        email: lowerEmail,
        image,
      },
      where: {
        id: user.id,
      },
    });

    res.status(200).json({ message: "Dados atualizados com sucesso" });
  } catch (err: any) {
    if (err.meta.target && err.meta.target[0] == "email") {
      return res.status(400).json({ message: "Email ja cadastrado" });
    }
    res.status(500).json({ message: "Error" });
  }
};

