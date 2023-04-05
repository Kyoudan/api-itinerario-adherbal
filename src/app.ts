import express from "express";
import { config } from "dotenv";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
config();
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);

export default app;
