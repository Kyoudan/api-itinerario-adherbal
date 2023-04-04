import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

class FindAllUsersController {
  async handle(req: Request, res: Response) {
    let queryInit = req.query.init as string;
    let queryLimit = req.query.limit as string;

    !queryInit ? (queryInit = "0") : undefined;
    !queryLimit ? (queryLimit = "100000") : undefined;

    const init = parseInt(queryInit);
    const limit = parseInt(queryLimit);

    try {
      const count = await prismaClient.users.count();
      const data = await prismaClient.users.findMany({
        skip: init,
        take: limit,
        select: {
          id: true,
          name: true,
          description: true,
          email: true,
          createdAt: true,
        },
      });
      res.status(200).json({ data, count });
    } catch {
      res.status(500).json({ message: "Erro ao buscar os dados" });
    }
  }
}

export default new FindAllUsersController();
