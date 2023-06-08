import { Request } from "express";

export interface UserType extends Request {
  user?: {
    id: number;
    name: string;
    email: string;
    iat: number;
    exp: number;
  };
}

export interface jwt_payload {
  id: number;
  name: string;
  email: string;
  iat: number;
  exp: number;
}
