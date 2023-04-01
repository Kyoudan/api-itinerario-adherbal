import { describe } from "@jest/globals";
import app from "@/app";
import request from "supertest";
import prismaClient from "@/database/prismaClient";

describe("Testar ativação de conta do usuario", () => {
  it("Deve ativar a conta", async () => {
    const token = await prismaClient.activateAccounts.findFirst();
    if (token) {
      await request(app)
        .get(`/activateAccount?token=${token.token}`)
        .expect(200);
    }
  });
  it("Deve dar erro", async () => {
    await request(app).get(`/activateAccount`).expect(400);
  });
  it("Deve dar erro", async () => {
    await request(app).get(`/activateAccount?token=asikfmiasfjmas`).expect(500);
  });
});
