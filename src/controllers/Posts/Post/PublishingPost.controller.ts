import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";
class PublishingPostController {
  async handle(req: Request, res: Response) {
    try {
      const { finished } = req.body;
      const uuid = req.params.id;

      if (!finished && finished != false)
        return res.status(500).json({ message: "Erro ao publicar a postagem" });

      await prismaClient.posts.update({
        where: {
          uuid: uuid,
        },
        data: {
          finished: finished,
        },
      });

      res.status(200).json({ message: "Publicação postada com sucesso!!" });
    } catch {
      res.status(500).json({ mesasge: "Erro ao publicar" });
    }
  }
}

export default new PublishingPostController();
