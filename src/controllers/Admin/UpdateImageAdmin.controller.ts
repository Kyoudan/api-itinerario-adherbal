import prismaClient from "../../database/prismaClient";
import { UserType } from "../../types/UserType";
import { Response } from "express";

class UpdateImageAdminController {
  async handle(req: UserType, res: Response) {
    try {
      const { image } = req.body;
      const user = req.user;

      if (!user) return res.status(400).json({ message: "Adm não encontrado" });

      await prismaClient.admins.update({
        data: {
          image,
        },
        where: {
          id: user.id,
        },
      });

      res.status(200).json({ message: "Dados atualizados com sucesso" });
    } catch (err: any) {
      res.status(500).json({ message: "Error" });
    }
  }
}

export default new UpdateImageAdminController();
