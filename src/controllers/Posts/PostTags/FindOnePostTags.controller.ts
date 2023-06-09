import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";

export const FindOnePostTagsController = async (req: Request, res: Response) => {
  try {
    const queryId = req.params.id;

    if (!queryId) return res.status(400).json({ message: "id invalido" });
    const id = parseInt(queryId);
    if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });
    const count = await prismaClient.postTags.count();
    const data = await prismaClient.postTags.findFirst({
      where: {
        id,
      },
    });
    if (data) {
      res.status(200).json({ data, count });
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  } catch {
    res.status(500).json({ message: "Erro ao obter os dados" });
  }
};
