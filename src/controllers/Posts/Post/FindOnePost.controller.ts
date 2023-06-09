import { Request, Response } from "express";
import prismaClient from "../../../database/prismaClient";

export const FindOnePostController = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.params;

    if (!uuid) return res.status(400).json({ message: "id invalido" });
    const data = await prismaClient.posts.findFirst({
      where: {
        uuid,
      },
      select: {
        id: true,
        uuid: true,
        name: true,
        image: true,
        author: true,
        finished: true,
        description: true,
        createdAt: true,
        postTags: {
          select: {
            id: true,
            name: true,
          },
        },
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        PostContent: {
          select: {
            id: true,
            content: true,
            order: true,
            type: true,
            size: true,
          },
          orderBy: {
            order: "asc",
          },
        },
      },
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  } catch {
    res.status(500).json({ message: "Erro ao obter os dados" });
  }
};
