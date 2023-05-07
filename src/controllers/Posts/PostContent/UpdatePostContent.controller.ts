import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";

export const UpdatePostContentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { content, type, size } = req.body;

    const queryId = req.params.id;

    if (!content)
      return res.status(400).json({ message: "Conteudo invalido!!" });
    if (!type)
      return res.status(400).json({ message: "Tipo do conteudo invalido!!" });
    if (!size) return res.status(400).json({ message: "Tamanho invalido!!" });
    if (type == "image" && size) {
      return res.status(400).json({
        message: "Não é possível definir um tamanho para a imagem!!",
      });
    }

    const id = parseInt(queryId);
    if (isNaN(id)) return res.status(400).json({ message: "id is NaN" });

    await prismaClient.postContent.update({
      where: {
        id,
      },
      data: {
        content,
        size,
        type,
      },
    });

    res.status(200).json({ message: "Conteudo atualizado!!" });
  } catch {
    res
      .status(500)
      .json({ message: "Erro ao atualizar o conteudo da postagem" });
  }
};
