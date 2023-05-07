import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const jwt_secret = process.env.JWT_SECRET as string;

export const VerifyTokenUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const { token } = req.body;

    if (!token) return res.status(400).json({ message: "Token indefinido!!" });

    jwt.verify(token, jwt_secret);

    res.status(200).json(true);
  } catch {
    res.status(401).json(false);
  }
};
