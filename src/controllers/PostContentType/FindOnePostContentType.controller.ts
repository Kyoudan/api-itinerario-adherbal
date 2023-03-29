import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../database/prismaClient";

class FindOnePostCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const queryId = req.params.id;

      if (!queryId) return res.status(400).json({ message: "id invalido" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });
      const result = await prismaClient.postContentType.findFirst({
        where: {
          id,
        },
      });
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Categoria não encontrada" });
      }
    } catch {
      res.status(500).json({ message: "Erro ao obter os dados" });
    }
  }
}

export default new FindOnePostCategoriesController();