import "reflect-metadata";
import express from "express";
import { config } from "dotenv";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

import { buildSchemasFunction } from "./graphql/index.graphql";
config();
const app = express();

const boostrapStart = async () => {
  const schemas = await buildSchemasFunction();
  const server = new ApolloServer({ schema: schemas });
  await server.start();
  server.applyMiddleware({ app });

  const corsOptions = process.env.CORS_ORIGIN?.split(",") || "*";
  
  app.use(
    cors({
      origin: corsOptions,
      optionsSuccessStatus: 200,
    })
  );
  app.use(express.json(), express.urlencoded({ extended: true }));
  app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use(routes);
};

export { app, boostrapStart };
