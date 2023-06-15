import { Request, Response } from "express";
import prismaClient from "../../../database/prismaClient";

export const DeletePostsController = async (req: Request, res: Response) => {
  try {
    const uuid = req.params.uuid;
    if (!uuid) return res.status(400).json({ message: "Uuid invalido!!" });

    const result = await prismaClient.posts.delete({
      where: {
        uuid: uuid,
      },
    });

    if (result) {
      res.status(200).json({ message: "Postagem apagada com sucesso!!" });
    } else {
      res.status(400).json({ message: "Uuid não encontrado" });
    }
  } catch (err: any) {
    if (
      err.meta.cause &&
      err.meta.cause == "Record to delete does not exist."
    ) {
      return res.status(400).json({ message: "Postagem não encontrada!!" });
    }
    res.status(500).json({ message: "Erro ao deletar as informações" });
  }
};
