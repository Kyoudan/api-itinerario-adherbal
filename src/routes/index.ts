import { Router } from "express";
import UserRoutes from "./user.routes";
import PostTagsRoutes from "./Posts/postTags.routes";
import Post from "./Posts/post.routes";
import PostContentType from "./Posts/postContentType.routes";
import PostContent from './Posts/postContent.routes'
const routes = Router();

routes.use(UserRoutes);
routes.use(PostTagsRoutes);
routes.use(Post);
routes.use(PostContentType);
routes.use(PostContent)

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "API OK!" });
});

export default routes;
