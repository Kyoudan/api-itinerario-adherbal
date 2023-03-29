import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../database/prismaClient";

class DeletePostCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const queryId = req.params.id;

      if (!queryId) return res.status(400).json({ message: "id invalido!!" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });
      const result = await prismaClient.postTags.delete({
        where: {
          id,
        },
      });
      if (result) {
        res.status(200).json({ message: "Categoria apagada com sucesso!!" });
      } else {
        res.status(400).json({ message: "Id não encontrado" });
      }
    } catch {
      res.status(500).json({ message: "Erro ao deletar as informações" });
    }
  }
}

export default new DeletePostCategoriesController();
