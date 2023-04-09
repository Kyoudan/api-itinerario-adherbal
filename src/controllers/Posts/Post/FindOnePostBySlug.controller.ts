import prismaClient from "../../../database/prismaClient";
import { Request, Response } from "express";

class FindOnePostBySlugController {
  async handle(req: Request, res: Response) {
    try {
      const { q } = req.query;
      console.log(q);

      if (!q || typeof q != "string")
        return res.status(400).json({ message: "Query invalida!!" });

      const slug = q.replace(/ /g, "_").toLowerCase();
      console.log(slug);

      const count = await prismaClient.posts.count({
        where: {
          slug: {
            contains: slug,
          },
        },
      });

      const data = await prismaClient.posts.findMany({
        where: {
          slug: {
            contains: slug,
          },
        },
      });

      res.status(200).json({ data, count });
    } catch {
      res.status(500).json({ message: "Erro ao procurar postagem" });
    }
  }
}

export default new FindOnePostBySlugController();
