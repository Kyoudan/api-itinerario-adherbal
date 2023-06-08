import "reflect-metadata";
import express from "express";
import { config } from "dotenv";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import PostResolver from "./graphql/Posts/PostsResolver";
config();
const app = express();

const boostrapStart = async () => {
  const schemas = await buildSchema({
    resolvers: [PostResolver],
  });

  const server = new ApolloServer({ schema: schemas });
  await server.start();
  server.applyMiddleware({ app });

  app.use(cors());
  app.use(express.json(), express.urlencoded({ extended: true }));
  app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use(routes);
};

export { app, boostrapStart };
