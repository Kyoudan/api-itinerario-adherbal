import {
  TextActivateAccount,
  ButtonActivateAccount,
} from "./../../assets/EmailStyle";
import { LogoItinerario } from "./../../assets/Logo";
import { Request, Response } from "express";
import { config } from "dotenv";
import prismaClient from "../../database/prismaClient";
import * as uuid from "uuid";
import * as bcrypt from "bcrypt";
import sendEmail from "../../nodemailer/nodemailer.config";
config();

const baseurl = process.env.BASE_URL;

class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name) return res.status(400).json({ message: "Nome invalido" });
      if (!email) return res.status(400).json({ message: "Email invalido!!" });
      if (!password)
        return res.status(400).json({ message: "Senha invalida!!" });

      const token = uuid.v4();
      const lowerEmail = email.toLowerCase();
      const hash = bcrypt.hashSync(password, 8);

      const user = await prismaClient.users.create({
        data: {
          name,
          email: lowerEmail,
          password: hash,
        },
      });

      await prismaClient.activateAccounts.create({
        data: {
          token: token,
          userId: user.id,
        },
      });

      sendEmail
        .sendMail({
          from: "Itinerario Se Liga na midia",
          to: `${email}`,
          subject: "Ativação de conta",
          html: `
							<img src="${LogoItinerario}" style="width: 350px; height: 350px;"/>
							<br />
							<p style="${TextActivateAccount}">Ative a sua conta do itinerario formativo: se liga na midia, clicando no botão a seguir:</p>
							<a href="${baseurl}/activateAccount?uid=${user.id}&token=${token}" style="${ButtonActivateAccount}">Ativar</a>
							`,
          text: "Ativação de conta",
        })
        .then(() => console.log("Enviado!!"))
        .catch((err) => console.log("Erro ao enviar", err));

      res.status(201).json({ message: "Usuario cadastrado com sucesso" });
    } catch (err: any) {
      if (err.meta.target[0] == "email") {
        res.status(400).json({ message: "Email ja cadastrado" });
      }
      res.status(500).json({ message: "Erro ao cadastrar usuario" });
    }
  }
}

export default new CreateUserController();
