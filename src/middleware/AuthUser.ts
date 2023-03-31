import { NextFunction, Response } from "express";
import * as jwt from "jsonwebtoken";
import { config } from "dotenv";
import { jwt_payload, UserType } from "../types/UserType";
config();

const jwt_secret = process.env.JWT_SECRET as string;

export default (req: UserType, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "Token invalido!!" });

    const verifyToken = jwt.verify(token, jwt_secret);
    if (verifyToken) {
      req.user = verifyToken as jwt_payload;
      next();
    } else {
      res.status(401).json({ message: "Sessão expirada" });
    }
  } catch (err: jwt.JsonWebTokenError | any) {
    if (err.message && err.message == "jwt expired") {
      res.status(401).json({ message: "Token expirado!!" });
    }
    res.status(500).json({ message: "Erro ao processar a rota" });
  }
};
