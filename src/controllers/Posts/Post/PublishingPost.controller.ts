import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";
class PublishingPostController {
  async handle(req: Request, res: Response) {
    try {
      const { finished } = req.body;
      const queryId = req.params.id;

      if (!finished)
        return res.status(500).json({ message: "Erro ao publicar a postagem" });
      if (!queryId) return res.status(500).json({ message: "Id invalido!!" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "Id is NaN" });

      await prismaClient.posts.update({
        where: {
          id,
        },
        data: {
          finished,
        },
      });

      res.status(200).json({ message: "Publicação postada com sucesso!!" });
    } catch {
      res.status(500).json({ mesasge: "Erro ao publicar" });
    }
  }
}

export default new PublishingPostController();
