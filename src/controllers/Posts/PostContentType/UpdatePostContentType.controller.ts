import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";

class UpdatePostCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const queryId = req.params.id;

      if (!name) return res.status(400).json({ message: "Nome invalido!!" });
      if (!queryId) return res.status(400).json({ message: "id invalido!!" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });
      const result = await prismaClient.postContentType.update({
        data: {
          name,
        },
        where: {
          id,
        },
      });
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ message: "Tipo não encontrado" });
      }
    } catch {
      res.status(500).json({ message: "Erro ao atualizar a categoria!!" });
    }
  }
}

export default new UpdatePostCategoriesController();
