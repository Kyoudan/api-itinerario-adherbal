import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";
class DeletePostContentController {
  async handle(req: Request, res: Response) {
    try {
      const queryId = req.params.id;

      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });

      await prismaClient.postContent.delete({
        where: { id },
      });

      res.status(200).json({ message: "Conteudo apagado com sucesso!!" });
    } catch {
      res.status(500).json({ message: "Erro ao apagar o conteudo" });
    }
  }
}

export default new DeletePostContentController();
