import { Response, Request } from "express";
import prismaClient from "../../database/prismaClient";

export const CreateFeaturedPostsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { postId } = req.body;

    if (!postId)
      return res.status(400).json({ message: "Postagem invalida!!" });

    const verifyCount = await prismaClient.posts.count({
      where: {
        isFixed: true,
      },
    });

    if (verifyCount >= 5)
      return res
        .status(400)
        .json({ message: "Limite de postagens em destaque atingido!!" });

    await prismaClient.posts.update({
      data: {
        isFixed: true,
      },
      where: {
        uuid: postId,
      },
    });
    res
      .status(201)
      .json({ message: "Postagem colocada em destaque com sucesso" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro ao colocar postagem em destaque!!" });
  }
};
