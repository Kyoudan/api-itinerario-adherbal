import { Router } from "express";
import UserRoutes from "./user.routes";
const routes = Router();

routes.use(UserRoutes);

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "API OK!" });
});

export default routes;
