import prismaClient from "../src/database/prismaClient";
import { hashSync } from "bcrypt";

export default async function main() {
  try {
    const user1 = {
      id: 1,
      name: "user",
      email: "user@gmail.com",
      password: hashSync("123", 8),
      activated: true,
    };

    const user2 = {
      id: 2,
      name: "user2",
      email: "user2@gmail.com",
      password: hashSync("123", 8),
      activated: false,
    };

    await prismaClient.users.createMany({
      data: [user1, user2],
    });

    console.log("Criado!!");
  } catch (err: any) {
    if (err.meta.target[0] && err.meta.target[0] == "email") {
      return console.log("Email já cadastrado");
    }
    console.log("Erro do codigo!!");
  }
}

main();
