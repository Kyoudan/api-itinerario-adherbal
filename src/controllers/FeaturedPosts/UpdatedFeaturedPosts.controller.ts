import { Response, Request } from "express";
import prismaClient from "../../database/prismaClient";

export const UpdatedFeaturedPostsController = async (
  req: Request,
  res: Response
) => {
  try {
    const remove = req.body.removePostId;
    const add = req.body.addPostId;

    if (!remove)
      return res.status(400).json({
        message: "A postagem a ser retirada não foi especificada!!",
      });

    if (!add)
      return res.status(400).json({
        message: "A postagem a ser adicionada não foi especificada!!",
      });

    await prismaClient.posts.update({
      data: {
        isFixed: false,
      },
      where: {
        id: remove,
      },
    });
    await prismaClient.posts.update({
      data: {
        isFixed: true,
      },
      where: {
        id: add,
      },
    });

    res.status(200).json({ message: "Postagem em destaque atualizada" });
  } catch {
    res
      .status(500)
      .json({ message: "Erro ao atualizar postagem em destaque!!" });
  }
};
