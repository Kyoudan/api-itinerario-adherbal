import { Response, Request } from "express";
import prismaClient from "../../database/prismaClient";
class UpdatedFeaturedPosts {
  async handle(req: Request, res: Response) {
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

      await prismaClient.posts.delete({
        where: {
          id: remove,
        },
      });
      await prismaClient.featuredPosts.create({
        data: {
          PostId: add,
        },
      });

      res.status(200).json({ message: "Postagem em destaque atualizada" });
    } catch {
      res
        .status(500)
        .json({ message: "Erro ao atualizar postagem em destaque!!" });
    }
  }
}

export default new UpdatedFeaturedPosts();
