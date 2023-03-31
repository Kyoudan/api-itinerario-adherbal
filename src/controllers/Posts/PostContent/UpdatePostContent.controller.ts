import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";
class UpdatePostContentController {
  async handle(req: Request, res: Response) {
    try {
      const { content } = req.body;
      const queryId = req.params.id;

      if (!content)
        return res.status(400).json({ message: "Conteudo invalido!!" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });

      await prismaClient.postContent.update({
        where: {
          id,
        },
        data: {
          content,
        },
      });

      res.status(200).json({ message: "Conteudo atualizado!!" });
    } catch {
      res
        .status(500)
        .json({ message: "Erro ao atualizar o conteudo da postagem" });
    }
  }
}

export default new UpdatePostContentController();
