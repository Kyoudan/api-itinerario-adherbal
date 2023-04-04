import { Response, Request } from "express";
import prismaClient from "../../../database/prismaClient";

class FindOneContentController {
  async handle(req: Request, res: Response) {
    try {
      const queryId = req.params.id;

      if (!queryId) return res.status(400).json({ message: "id invalido" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });
      const count = await prismaClient.postContent.count();
      const data = await prismaClient.postContent.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          content: true,
          Posts: {
            select: {
              id: true,
              name: true,
              description: true,
              color: true,
            },
          },
        },
      });
      if (data) {
        res.status(200).json({ data, count });
      } else {
        res
          .status(404)
          .json({ message: "Conteudo da postagem não encontrada" });
      }
    } catch {
      res.status(500).json({ message: "Erro ao obter os dados" });
    }
  }
}

export default new FindOneContentController();
