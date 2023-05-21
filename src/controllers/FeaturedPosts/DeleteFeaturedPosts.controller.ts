import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

export const DeleteFeaturedPostsController = async (
  req: Request,
  res: Response
) => {
  try {
    const postId = req.params.id;

    if (!postId) return res.status(400).json({ message: "Id invalido!!" });
    const id = parseInt(postId);
    if (isNaN(id)) return res.status(400).json({ message: "Id is NaN" });

    await prismaClient.posts.update({
      data: {
        isFixed: false,
      },
      where: {
        id,
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
