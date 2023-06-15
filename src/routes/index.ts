import { Router } from "express";
import PostTagsRoutes from "./Posts/postTags.routes";
import PostRoutes from "./Posts/post.routes";
import PostContentRoutes from "./Posts/postContent.routes";
import featuredPostsRoutes from "./Posts/featuredPost.routes";
import adminRoutes from "./admin.routes";
import prismaClient from "../database/prismaClient";
const routes = Router();

routes.use(PostTagsRoutes);
routes.use(PostRoutes);
routes.use(PostContentRoutes);
routes.use(featuredPostsRoutes);
routes.use(adminRoutes);

routes.get("/health", async (req, res) => {
  try {
    const result = await prismaClient.$connect();
    res.status(200).json({
      message: "Api e banco de dados conectados",
      status: "OK",
      db: result,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      message: "ERROR",
      status: "ERROR",
      db: err,
    });
  }
});

export default routes;
