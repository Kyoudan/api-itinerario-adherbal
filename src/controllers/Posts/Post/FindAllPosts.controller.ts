import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";

class FindAllPostCategoriesController {
  async handle(req: Request, res: Response) {
    let queryInit = req.query.init as string;
    let queryLimit = req.query.limit as string;

    !queryInit ? (queryInit = "0") : undefined;
    !queryLimit ? (queryLimit = "100000") : undefined;

    const init = parseInt(queryInit);
    const limit = parseInt(queryLimit);

    try {
      const count = await prismaClient.posts.count();
      const data = await prismaClient.posts.findMany({
        skip: init,
        take: limit,
        select: {
          id: true,
          uuid: true,
          image: true,
          name: true,
          description: true,
          finished: true,
          author: true,
          color: true,
          createdAt: true,
          postTags: {
            select: {
              id: true,
              name: true,
            },
          },
          users: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          PostContent: {
            select: {
              id: true,
              content: true,
              type: true,
              size: true,
            },
          },
        },
      });
      res.status(200).json({ data, count });
    } catch {
      res.status(500).json({ message: "Erro ao buscar os dados" });
    }
  }
}

export default new FindAllPostCategoriesController();
