import { describe } from "@jest/globals";
import app from "@/app";
import request from "supertest";

describe("Criação de conta do usuario", () => {
  const user = request(app)
    .post("/login")
    .send({ email: "user@gmail.com", password: "123" });
  it("Atualizar informações do usuario", async () => {
    request(app)
      .put("/users")
      .set("Authorization", `${user}`)
      .send({
        name: "user",
        email: "user@gmail.com",
        description: `Atualizado: ${Math.floor(Math.random() * 100 + 1)}`,
      })
      .expect(200);
  });
  it("Deve recusar por causa do email igual", async () => {
    request(app)
      .put("/users")
      .set("Authorization", `${user}`)
      .send({
        email: "user2@gmail.com",
      })
      .expect(500);
  });
  it("Deve recusar por causa do token", async () => {
    request(app)
      .put("/users")
      .set("Authorization", `Teste${user}`)
      .send({
        email: "user2@gmail.com",
      })
      .expect(401);
  });
});
