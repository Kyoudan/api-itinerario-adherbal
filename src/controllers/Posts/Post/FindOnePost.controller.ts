import { Request, Response } from "express";
import prismaClient from "../../../database/prismaClient";

class FindOnePost {
  async handle(req: Request, res: Response) {
    try {
      const queryId = req.params.id;

      if (!queryId) return res.status(400).json({ message: "id invalido" });
      const id = parseInt(queryId);
      if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });
      const count = await prismaClient.posts.count();
      const data = await prismaClient.posts.findFirst({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          color: true,
          slug: true,
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
              order: true,
              PostContentType: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
            orderBy: {
              order: "asc",
            },
          },
        },
      });
      if (data) {
        res.status(200).json({ data, count });
      } else {
        res.status(404).json({ message: "Categoria não encontrada" });
      }
    } catch {
      res.status(500).json({ message: "Erro ao obter os dados" });
    }
  }
}

export default new FindOnePost();
