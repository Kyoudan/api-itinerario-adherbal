import { Request, Response } from "express";
import prismaClient from "../../../database/prismaClient";

interface IConsult {
  id?: number;
}

export const CreatePostContentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { content, type, postId, size, reference } = req.body;

    if (!content)
      return res.status(400).json({ message: "Conteudo invalido!!" });
    if (!type)
      return res.status(400).json({ message: "Tipo do conteudo invalido!!" });
    if (!postId)
      return res.status(500).json({ message: "Postagem invalida!!" });

    if (type == "image" && size) {
      return res.status(400).json({
        message: "Não é possível definir um tamanho para a imagem!!",
      });
    }

    if (type == "text" && !size)
      return res.status(400).json({ message: "Tamanho invalido!!" });

    const orderedUser = await prismaClient.postContent.findFirst({
      where: {
        Posts: {
          uuid: postId,
        },
      },
      select: {
        order: true,
        Posts: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        order: "desc",
      },
    });

    let consult: IConsult | null = {};

    if (!orderedUser) {
      consult = await prismaClient.posts.findUnique({
        where: {
          uuid: postId,
        },
        select: {
          id: true,
        },
      });

      if (!consult)
        return res.status(500).json({ message: "Postagem não encontrada" });
    }

    let order = 1;

    if (!orderedUser) order = 1;
    else if (orderedUser) order = orderedUser.order + 1;

    const idPost = !orderedUser ? consult.id : orderedUser.Posts.id;

    if (!idPost)
      return res.status(500).json({ message: "Postagem não encontrada!!" });

    const result = await prismaClient.postContent.create({
      data: {
        content,
        type,
        size,
        PostsId: idPost,
        order: order,
        reference,
      },
    });
    res.status(201).json(result);
  } catch (err: any) {
    if (err.meta.field_name.includes("PostContentTypeId")) {
      return res.status(400).json({ message: "Tipo do conteudo não existe!!" });
    }
    if (err.meta.field_name.includes("PostsId")) {
      return res.status(400).json({ message: "Postagem não encontrada!!!" });
    }
    res.status(500).json({ message: "Erro ao criar um conteudo!!" });
  }
};
