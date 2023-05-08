import prismaClient from "../../../database/prismaClient";
import { Request, Response } from "express";

export const FindAllByTagController = async (req: Request, res: Response) => {
  try {
    let queryInit = req.query.init as string;
    let queryLimit = req.query.limit as string;
    let queryTag = req.query.tag as string;

    if (!queryTag)
      return res.status(400).json({ message: "Categoria invalida!!" });

    !queryInit ? (queryInit = "0") : undefined;
    !queryLimit ? (queryLimit = "100000") : undefined;

    const init = parseInt(queryInit);
    const limit = parseInt(queryLimit);

    const count = await prismaClient.posts.count();

    const data = await prismaClient.posts.findMany({
      skip: init,
      take: limit,
      where: {
        postTags: {
          name: {
            contains: queryTag,
          },
        },
      },
    });

    res.status(200).json({ data, count });
  } catch {
    res.status(500).json({ message: "Erro no servidor!!" });
  }
};
