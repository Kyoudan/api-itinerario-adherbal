import { Router } from "express";
import UserRoutes from "./user.routes";
import PostCategoriesRoutes from "./postCategories.routes";
import Post from "./post.routes";
const routes = Router();

routes.use(UserRoutes);
routes.use(PostCategoriesRoutes);
routes.use(Post);

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "API OK!" });
});

export default routes;
