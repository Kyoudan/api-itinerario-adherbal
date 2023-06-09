import prismaClient from "../../database/prismaClient";
import { Request, Response } from "express";

export const FindOneAdminController = async (req: Request, res: Response) => {
  try {
    const queryId = req.params.id;

    if (!queryId) return res.status(400).json({ message: "Id invalido!!" });
    const id = parseInt(queryId);
    const data = await prismaClient.admins.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        image: true,
      },
    });
    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "Erro ao buscar os dados" });
  }
};


