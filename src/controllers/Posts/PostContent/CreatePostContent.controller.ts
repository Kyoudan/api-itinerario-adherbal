import { Request, Response } from "express";
import prismaClient from "../../../database/prismaClient";

class CreatePostContentController {
  async handle(req: Request, res: Response) {
    try {
      const { content, typeId, postId } = req.body;

      if (!content)
        return res.status(400).json({ message: "Conteudo invalido!!" });
      if (!typeId)
        return res.status(400).json({ message: "Tipo do conteudo invalido!!" });
      if (!postId)
        return res.status(500).json({ message: "Postagem invalida!!" });

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

      console.log(orderedUser);

      let order = 1;

      if (orderedUser && orderedUser?.order > 1) order = orderedUser.order + 1;

      console.log(order);

      const result = await prismaClient.postContent.create({
        data: {
          content,
          PostContentTypeId: typeId,
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
