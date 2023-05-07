import prismaClient from "../../../database/prismaClient";
import { Request, Response } from "express";

export const FindOnePostByNameController = async (
  req: Request,
  res: Response
) => {
  try {
    const { q } = req.query;
    console.log(q);

    if (!q || typeof q != "string")
      return res.status(400).json({ message: "Query invalida!!" });

    const count = await prismaClient.posts.count({
      where: {
        name: {
          contains: q,
        },
      },
    });

    const data = await prismaClient.posts.findMany({
      where: {
        name: {
          contains: q,
        },
      },
      select: {
        name: true,
        description: true,
        uuid: true,
        postTags: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).json({ data, count });
  } catch {
    res.status(500).json({ message: "Erro ao procurar postagem" });
  }
};
