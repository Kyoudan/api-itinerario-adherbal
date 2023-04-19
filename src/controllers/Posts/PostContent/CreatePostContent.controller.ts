import { Request, Response } from "express";
import prismaClient from "../../../database/prismaClient";

class CreatePostContentController {
  async handle(req: Request, res: Response) {
    try {
      const { content, type, postId, size } = req.body;

      if (!content)
        return res.status(400).json({ message: "Conteudo invalido!!" });
      if (!type)
        return res.status(400).json({ message: "Tipo do conteudo invalido!!" });
      if (!postId)
        return res.status(500).json({ message: "Postagem invalida!!" });
      if (!size)
        return res.status(400).json({ message: "Tamanho invalido!!" });

      if (type == "image" && size) {
        return res.status(400).json({
          message: "Não é possível definir um tamanho para a imagem!!",
        });
      }

      const orderedUser = await prismaClient.postContent.findFirst({
        where: {
          PostsId: postId,
        },
        select: {
          order: true,
        },
        orderBy: {
          order: "desc",
        },
      });

      let order = 1;

      if (!orderedUser) order = 1;
      else if (orderedUser) order = orderedUser.order + 1;

      const result = await prismaClient.postContent.create({
        data: {
          content,
          type,
          size,
          PostsId: postId,
          order: order,
        },
      });
      res.status(201).json(result);
    } catch (err: any) {
      if (err.meta.field_name.includes("PostContentTypeId")) {
        return res
          .status(400)
          .json({ message: "Tipo do conteudo não existe!!" });
      }
      if (err.meta.field_name.includes("PostsId")) {
        return res.status(400).json({ message: "Postagem não encontrada!!!" });
      }
      res.status(500).json({ message: "Erro ao criar um conteudo!!" });
    }
  }
}

export default new CreatePostContentController();
