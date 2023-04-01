import { describe } from "@jest/globals";
import app from "@/app";
import request from "supertest";
import * as uuid from "uuid";

const email = `${uuid.v4()}@gmail.com`;

describe("Criação de conta do usuario", () => {
  it("Deve criar", async () => {
    await request(app)
      .post("/users")
      .send({ name: "John", email: email, password: "Teste" })
      .expect(201);
  });
  it("Deve recusar o email", async () => {
    await request(app)
      .post("/users")
      .send({ name: "John", email: email, password: "Teste" })
      .expect(400);
  });
  it("Deve recusar o nome", async () => {
    await request(app)
      .post("/users")
      .send({ name: "", email: email, password: "Teste" })
      .expect(400);
  });
  it("Deve recusar o email", async () => {
    await request(app)
      .post("/users")
      .send({ name: "John", email: "", password: "Teste" })
      .expect(400);
  });
  it("Deve recusar a senha", async () => {
    await request(app)
      .post("/users")
      .send({ name: "John", email: email, password: "" })
      .expect(400);
  });
});
