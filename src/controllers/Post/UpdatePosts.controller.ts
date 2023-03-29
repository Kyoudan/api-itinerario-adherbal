import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

class UpdatePostsController {
  async handle(req: Request, res: Response) {
    try {
      const { name, color } = req.body;
      const queryId = req.params.id;

      if (!name) return res.status(400).json({ message: "Nome invalido!!" });
      if (!color) return res.status(400).json({ message: "Cor invalida" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });

      const slug = name.toLowerCase().replace(/ /g, "_");

      const result = await prismaClient.posts.update({
        data: {
          name,
          color,
          slug,
        },
        where: {
          id,
        },
      });
      if (result) {
        res.status(200).json({ message: "Postagem atualizada!!" });
      } else {
        res.status(400).json({ message: "Postagem não encontrada!!" });
      }
    } catch {
      res.status(500).json({ message: "Erro ao atualizar o post" });
    }
  }
}

export default new UpdatePostsController();
