import { Response, Request } from "express";
import prismaClient from "../../database/prismaClient";
class CreateFeaturedPostsController {
  async handle(req: Request, res: Response) {
    try {
      const { postId } = req.body;

      if (!postId)
        return res.status(400).json({ message: "Postagem invalida!!" });

      const verifyCount = await prismaClient.featuredPosts.count({});

      if (verifyCount > 5)
        return res
          .status(400)
          .json({ message: "Limite de postagens em destaque atingido!!" });

      await prismaClient.featuredPosts.create({
        data: {
          PostId: postId,
        },
      });
      res
        .status(201)
        .json({ message: "Postagem colocada em destaque com sucesso" });
    } catch {
      res
        .status(500)
        .json({ message: "Erro ao colocar postagem em destaque!!" });
    }
  }
}

export default new CreateFeaturedPostsController();
