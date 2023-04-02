import { Response } from "express";
import { compareSync } from "bcrypt";
import prismaClient from "../../database/prismaClient";
import { UserType } from "../../types/UserType";

class DeleteAdminController {
  async handle(req: UserType, res: Response) {
    try {
      const { password } = req.body;
      const user = req.user;

      if (!user) return res.status(400).json({ message: "Adm não encontrado" });
      if (!password)
        return res.status(400).json({ message: "Senha invalida!!" });

      const userDices = await prismaClient.admins.findUnique({
        where: {
          id: user.id,
        },
      });

      if (!userDices)
        return res.status(500).json({ message: "Dados não encontrados" });

      const verifyPassword = compareSync(password, userDices?.password);

      if (!verifyPassword)
        return res.status(400).json({ message: "Senha invalida!!" });

      await prismaClient.admins.delete({
        where: {
          id: user.id,
        },
      });
      res.status(200).json({ message: "Administrador deletado com sucesso!!" });
    } catch {
      res.status(500).json({ message: "Error" });
    }
  }
}

export default new DeleteAdminController();
