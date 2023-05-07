import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";
import { Sql } from "@prisma/client/runtime";

export const FindAllPostTagsController = async (req: Request, res: Response) => {
  try {
    let queryInit = req.query.init as string;
    let queryLimit = req.query.limit as string;
    let findQuery = req.query.find as string;

    !queryInit ? (queryInit = "0") : undefined;
    !queryLimit ? (queryLimit = "100000") : undefined;

    const init = parseInt(queryInit);
    const limit = parseInt(queryLimit);
    const find = parseInt(findQuery);

    let data = {};

    const count = await prismaClient.postTags.count();

    if (findQuery && isNaN(find)) {
      data =
        await prismaClient.$queryRaw`SELECT * FROM posttags WHERE lower(name) LIKE lower(${findQuery})`;
    } else if (findQuery && !isNaN(find)) {
      const result = await prismaClient.postTags.findMany({
        where: {
          id: find,
        },
      });
      if (result) {
        data = result;
      }
    } else {
      data = await prismaClient.postTags.findMany({
        skip: init,
        take: limit,
        select: {
          id: true,
          name: true,
          createdAt: true,
        },
      });
    }

    res.status(200).json({ data, count });
  } catch {
    res.status(500).json({ message: "Erro ao buscar os dados" });
  }
};
