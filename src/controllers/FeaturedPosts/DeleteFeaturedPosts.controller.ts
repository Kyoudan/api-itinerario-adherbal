import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

export const DeleteFeaturedPostsController = async (
  req: Request,
  res: Response
) => {
  try {
    const postId = req.params.uuid;

    if (!postId) return res.status(400).json({ message: "Id invalido!!" });

    await prismaClient.posts.update({
      data: {
        isFixed: false,
      },
      where: {
        uuid: postId,
      },
    });

    res
      .status(200)
      .json({ message: "Postagem em destaque retirada com sucesso!!" });
  } catch {
    res
      .status(500)
      .json({ message: "Erro ao apagar a postagem em destaque!!" });
  }
};
