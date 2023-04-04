import prismaClient from "../src/database/prismaClient";
import { hashSync } from "bcrypt";
import { config } from "dotenv";
config();

async function seedUser() {
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

    console.log("Criado 1 !!");
  } catch (err: any) {
    if (err.meta.target && err.meta.target[0] == "email") {
      return console.log("Email já cadastrado 1");
    }
    if (err.meta.target && err.meta.target[0] == "id") {
      return console.log("Id já cadastrado 1");
    }
    console.log(err);
    console.log("Erro do codigo 1 !!");
  }
}

async function seedAdm() {
  try {
    const adm = {
      name: `${process.env.SEED_USER}`,
      email: `${process.env.SEED_EMAIL}`,
      password: hashSync(process.env.SEED_PASSWORD as string, 8),
    };

    await prismaClient.admins.create({
      data: adm,
    });
    console.log("Criado 2");
  } catch (err: any) {
    if (err.meta.target && err.meta.target[0] == "email") {
      return console.log("Email já cadastrado 2");
    }
    if (err.meta.target && err.meta.target[0] == "id") {
      return console.log("Id já cadastrado 2");
    }
    console.log(err);
    console.log("Erro do codigo 2 !!");
  }
}

async function seedPostType() {
  try {
    const types = [
      { name: "image" },
      { name: "text" },
      { name: "title" },
      { name: "label" },
    ];

    await prismaClient.postContentType.createMany({
      data: types,
    });

    console.log("Criado 2");
  } catch (err: any) {
    console.log(err);
    console.log("Erro do codigo 2 !!");
  }
}

async function seedPostTags() {
  try {
    const types = [
      { name: "Saúde" },
      { name: "Tecnologia" },
      { name: "Arte" },
      { name: "Política" },
      { name: "Economia" },
      { name: "Preconceito" },
      { name: "Cultura" },
    ];

    await prismaClient.postTags.createMany({
      data: types,
    });

    console.log("Criado 2");
  } catch (err: any) {
    console.log(err);
    console.log("Erro do codigo 2 !!");
  }
}

seedUser();
seedAdm();
seedPostType();
seedPostTags();
