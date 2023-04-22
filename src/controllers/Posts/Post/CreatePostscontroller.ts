import { Response } from "express";
import prismaClient from "../../../database/prismaClient";
import { UserType } from "../../../types/UserType";

class CreatePostController {
  async handle(req: UserType, res: Response) {
    try {
      const { name, color, description, postTagsId } = req.body;
      const user = req.user;

      if (!name) return res.status(400).json({ message: "Nome invalido!!" });
      if (!color) return res.status(400).json({ message: "Cor invalida!!" });
      if (!user) return res.status(500).json({ message: "Usuario invalido!!" });
      if (!postTagsId)
        return res.status(400).json({ message: "Categoria invalida" });
      if (!description)
        return res.status(400).json({ message: "Descrição invalida" });

      await prismaClient.posts.create({
        data: {
          name,
          color,
          description,
          adminId: user.id,
          postTagsId: postTagsId,
          author: user.name
        },
      });

      res.status(201).json({ message: "Postagem criada com sucesso!!" });
    } catch (err: any) {
      if (err.meta.target && err.meta.target[0] == "slug") {
        return res.status(400).json({ message: "Nome ja cadastrado" });
      }

      if (err.meta.field_name && err.meta.field_name.includes("categoryId")) {
        return res.status(400).json({ message: "Categoria não existente" });
      }

      if (
        err.message &&
        err.message.includes(
          "The provided value for the column is too long for the column's type. Column: (not available)"
        )
      ) {
        return res.status(400).json({
          message: "Texto muito longo!!",
        });
      }
      res.status(500).json({ message: "Erro ao criar postagem!!" });
    }
  }
}

export default new CreatePostController();
