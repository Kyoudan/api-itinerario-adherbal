import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";

export const FindAllPostsPublicController = async (req: Request, res: Response) => {
  try {
    let queryInit = req.query.init as string;
    let queryLimit = req.query.limit as string;
    let findQuery = req.query.find as string;
    let tagQuery = req.query.tag as string;

    !queryInit ? (queryInit = "0") : undefined;
    !queryLimit ? (queryLimit = "100000") : undefined;

    const init = parseInt(queryInit);
    const limit = parseInt(queryLimit);
    const find = parseInt(findQuery);

    let data = {};

    const count = await prismaClient.posts.count();

    if (tagQuery && findQuery && isNaN(find)) {
      const search = findQuery.replace(/ /g, "-").toLowerCase();
      data = await prismaClient.posts.findMany({
        skip: init,
        take: limit,
        where: {
          slug: {
            contains: search,
          },
          postTags: {
            name: tagQuery,
          },
          finished: true,
        },
        select: {
          id: true,
          uuid: true,
          image: true,
          name: true,
          description: true,
          finished: true,
          author: true,
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
    } else if (findQuery && isNaN(find)) {
      const search = findQuery.replace(/ /g, "-").toLowerCase();
      data = await prismaClient.posts.findMany({
        skip: init,
        take: limit,
        where: {
          slug: {
            contains: search,
          },
          finished: true,
        },
        select: {
          id: true,
          uuid: true,
          image: true,
          name: true,
          description: true,
          finished: true,
          author: true,
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
    } else if (findQuery && !isNaN(find)) {
      data = await prismaClient.posts.findMany({
        skip: init,
        take: limit,
        where: {
          id: find,
          finished: true,
        },
        select: {
          id: true,
          uuid: true,
          image: true,
          name: true,
          description: true,
          finished: true,
          author: true,
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
    } else {
      data = await prismaClient.posts.findMany({
        skip: init,
        take: limit,
        where: {
          finished: true,
        },
        select: {
          id: true,
          uuid: true,
          image: true,
          name: true,
          description: true,
          finished: true,
          author: true,
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
    }

    res.status(200).json({ data, count });
  } catch {
    res.status(500).json({ message: "Erro ao buscar os dados" });
  }
};
