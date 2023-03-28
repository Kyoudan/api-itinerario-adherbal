import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

class FindOneUserController {
  async handle(req: Request, res: Response) {
    try {
      const queryId = req.params.id;

      if (!queryId) return res.status(400).json({ message: "Id invalido!!" });
      const id = parseInt(queryId);
      const result = await prismaClient.users.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          email: true,
          createdAt: true,
        },
      });
      res.status(200).json(result)
    } catch {
      res.status(500).json({ message: "Erro ao buscar os dados" });
    }
  }
}

export default new FindOneUserController();
