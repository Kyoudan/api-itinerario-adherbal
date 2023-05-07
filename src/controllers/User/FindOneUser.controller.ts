import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

export const FindOneUserController = async (req: Request, res: Response) => {
  try {
    const queryId = req.params.id;

    if (!queryId) return res.status(400).json({ message: "Id invalido!!" });
    const id = parseInt(queryId);
    const count = await prismaClient.users.count();
    const data = await prismaClient.users.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        email: true,
        createdAt: true,
      },
    });
    res.status(200).json({ data, count });
  } catch {
    res.status(500).json({ message: "Erro ao buscar os dados" });
  }
};
