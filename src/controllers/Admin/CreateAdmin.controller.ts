import prismaClient from "../../database/prismaClient";
import { UserType } from "../../types/UserType";
import { Response } from "express";
import { hashSync } from "bcrypt";

export const CreateAdminController = async (req: UserType, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = req.user;

    if (!name) return res.status(400).json({ message: "Nome invalido!!" });
    if (!email) return res.status(400).json({ message: "Email invalido!!" });
    if (!user) return res.status(400).json({ message: "Adm não encontrado" });
    if (!password) return res.status(400).json({ message: "Senha invalida!!" });

    const hash = hashSync(password, 8);
    const lowerEmail = email.toLowerCase();

    await prismaClient.admins.create({
      data: {
        name,
        email: lowerEmail,
        password: hash,
      },
    });

    res.status(201).json({ message: "Administrador cadastrado com sucesso!!" });
  } catch {
    return res.status(500).json({ message: "Erro ao criar administrador!!" });
  }
};
