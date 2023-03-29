import { Request, Response } from "express";
import prismaClient from "../../../database/prismaClient";

class DeletePostsController {
  async handle(req: Request, res: Response) {
    try {
      const queryId = req.params.id;

      if (!queryId) return res.status(400).json({ message: "id invalido!!" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });
      const result = await prismaClient.posts.delete({
        where: {
          id,
        },
      });
      if (result) {
        res.status(200).json({ message: "Postagem apagada com sucesso!!" });
      } else {
        res.status(400).json({ message: "Id não encontrado" });
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
  }
}

export default new DeletePostsController();
