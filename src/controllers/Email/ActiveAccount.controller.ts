import { Request, Response } from "express";
import prismaClient from "../../database/prismaClient";

class ActiveAccountController {
  async handle(req: Request, res: Response) {
    try {
      const token = req.query.token as string;

      if (!token) return res.status(400).json({ message: "Token invalido!!" });

      await prismaClient.activateAccounts.update({
        data: {
          users: {
            update: {
              activated: true,
            },
          },
        },
        where: {
          token: token,
        },
      });

      await prismaClient.activateAccounts.delete({
        where: {
          token: token,
        },
      });

      res.status(200).json({ message: "Conta ativada com sucesso!!" });
    } catch {
      res.status(500).json({ message: "Erro ao ativar a conta" });
    }
  }
}

export default new ActiveAccountController();
