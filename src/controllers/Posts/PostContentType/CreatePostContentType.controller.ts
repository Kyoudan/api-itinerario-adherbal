import { Response } from "express";
import { Request } from "express";
import prismaClient from "../../../database/prismaClient";

class CreatePostCategoriesController {
  async handle(req: Request, res: Response) {
    try {
      const { name } = req.body;

      if (!name) return res.status(400).json({ message: "Nome invalido!!" });

      await prismaClient.postContentType.create({
        data: {
          name: name,
        },
      });

      res.status(201).json({ message: "Tipo criado com sucesso" });
    } catch {
      res.status(500).json({ message: "Erro ao criar o Tipo" });
    }
  }
}

export default new CreatePostCategoriesController();
