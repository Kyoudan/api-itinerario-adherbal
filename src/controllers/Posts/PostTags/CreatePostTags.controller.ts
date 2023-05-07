import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";


  export const CreatePostTagsController = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      if (!name) return res.status(400).json({ message: "Nome invalido!!" });

      await prismaClient.postTags.create({
        data: {
          name: name,
        },
      });

      res.status(201).json({ message: "Categoria criada com sucesso" });
    } catch {
      res.status(500).json({ message: "Erro ao criar a categoria" });
    }
  };

