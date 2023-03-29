import { Router } from "express";
import CreatePostController from "../controllers/Post/CreatePostScontroller";
import FindAllPostsController from "../controllers/Post/FindAllPosts.controller";
import FindOnePostController from "../controllers/Post/FindOnePost.controller";
import UpdatePostsController from "../controllers/Post/UpdatePosts.controller";
import AuthUser from "../middleware/AuthUser";
const routes = Router();

routes.get("/post/:id", FindOnePostController.handle);
routes.get("/post", FindAllPostsController.handle);
routes.post("/post", AuthUser, CreatePostController.handle);
routes.put("/post/:id", UpdatePostsController.handle);

export default routes;
