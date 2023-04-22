import prismaClient from "../../../database/prismaClient";
import { Request, Response } from "express";

interface IContent {
  id: number;
  text: string;
  size: string;
  type: string;
}

class UpdateAllPostController {
  async handle(req: Request, res: Response) {
    try {
      const { title, description, color, id } = req.body;
      const content: IContent[] = req.body.content;

      if (!title) return res.status(400).json({ message: "Titulo invalido!!" });
      if (!color) return res.status(400).json({ message: "Cor invalida!!" });
      if (!description)
        return res.status(400).json({ message: "Descrição invalida!!" });
      if (!content)
        return res.status(400).json({ message: "Conteudo invalido!!" });
      if (!Array.isArray(content))
        return res
          .status(500)
          .json({ message: "Array de conteudo invalido!!" });

      await prismaClient.posts.update({
        where: {
          id: id,
        },
        data: {
          name: title,
          description,
          color,
        },
      });

      content.forEach(async (item: IContent) => {
        if (item) {
          console.log(item);
          if (item.type == "image" && item.size)
            return res.status(400).json({
              message: "A é possível definir tamanho para a imagem!!",
            });

          if (typeof item.size != "number" && typeof item.size != "object") {
            return res.status(400).json({
              message: "Tamanho não é um numero!!",
            });
          }

          await prismaClient.postContent.update({
            where: {
              id: item.id,
            },
            data: {
              content: item.text,
              type: item.type,
              size: item.size,
            },
          });
        }
      });
      return res
      .status(200)
      .json({ message: "Postagem atualizada com sucesso!!" });
    } catch {
      res.status(500).json({ message: "Erro ao atualizar a postagem" });
    }
  }
}

export default new UpdateAllPostController();
