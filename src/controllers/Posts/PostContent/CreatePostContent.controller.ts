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

      await prismaClient.postContent.create({
        data: {
          content,
          PostContentTypeId: typeId,
          PostsId: postId,
        },
      });
    } catch {
      res.status(500).json({ message: "Erro ao criar um conteudo!!" });
    }
  }
}

export default new CreatePostContentController();
