import { Router } from "express";
import CreatePostController from "../controllers/Post/CreatePost.controller";
import FindAllPostsController from "../controllers/Post/FindAllPosts.controller";
import AuthUser from "../middleware/AuthUser";
const routes = Router();

routes.get("/post", FindAllPostsController.handle);
routes.post("/post", AuthUser, CreatePostController.handle);

export default routes;
