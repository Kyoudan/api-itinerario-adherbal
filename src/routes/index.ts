import { Router } from "express";
import UserRoutes from "./user.routes";
import PostTagsRoutes from "./Posts/postTags.routes";
import PostRoutes from "./Posts/post.routes";
import PostContentTypeRoutes from "./Posts/postContentType.routes";
import PostContentRoutes from "./Posts/postContent.routes";
import featuredPostsRoutes from "./Posts/featuredPost.routes";
import adminRoutes from "./admin.routes";
const routes = Router();

routes.use(UserRoutes);
routes.use(PostTagsRoutes);
routes.use(PostRoutes);
routes.use(PostContentTypeRoutes);
routes.use(PostContentRoutes);
routes.use(featuredPostsRoutes);
routes.use(adminRoutes);

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "API OK!" });
});

export default routes;
