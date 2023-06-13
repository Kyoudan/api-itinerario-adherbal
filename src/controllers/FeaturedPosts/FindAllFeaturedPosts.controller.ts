import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

export const FindAllFeaturedPostsController = async (
  req: Request,
  res: Response
) => {
  let queryInit = req.query.init as string;
  let queryLimit = req.query.limit as string;

  !queryInit ? (queryInit = "0") : undefined;
  !queryLimit ? (queryLimit = "100000") : undefined;

  const init = parseInt(queryInit);
  const limit = parseInt(queryLimit);

  try {
    const count = await prismaClient.posts.count({
      where: {
        isFixed: true,
      },
    });
    const data = await prismaClient.posts.findMany({
      skip: init,
      take: limit,
      where: {
        isFixed: true,
      },
      select: {
        id: true,
        name: true,
        image: true,
        description: true,
        uuid: true,
        isFixed: true,
        users: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        postTags: {
          select: {
            id: true,
            name: true,
          },
        },
        PostContent: {
          select: {
            id: true,
            content: true,
            type: true,
          },
        },
      },
    });
    res.status(200).json({ data, count });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro ao buscar os dados" });
  }
};
