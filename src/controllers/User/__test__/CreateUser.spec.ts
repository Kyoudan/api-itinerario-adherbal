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
});
