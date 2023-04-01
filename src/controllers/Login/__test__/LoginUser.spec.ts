import { describe } from "@jest/globals";
import app from "@/app";
import request from "supertest";

describe("Testar Login do usuario", () => {
  it("Deve logar", async () => {
    await request(app)
      .post("/login")
      .send({ email: "user@gmail.com", password: "123" })
      .expect(200);
  });
  it("Deve recusar o email", async () => {
    await request(app)
      .post("/login")
      .send({ email: "", password: "123" })
      .expect(400);
  });
  it("Deve recusar a senha", async () => {
    await request(app)
      .post("/login")
      .send({ email: "user@gmail.com", password: "" })
      .expect(400);
  });
  it("Deve recusar e avisar que a conta não está ativada", async () => {
    await request(app)
      .post("/login")
      .send({ email: "user2@gmail.com", password: "123" })
      .expect(401);
  });
});
