import { Router } from "express";
import CreatePostController from "../../controllers/Posts/Post/CreatePostscontroller";
import DeletePostsController from "../../controllers/Posts/Post/DeletePosts.controller";
import FindAllPostsController from "../../controllers/Posts/Post/FindAllPosts.controller";
import FindOnePostController from "../../controllers/Posts/Post/FindOnePost.controller";
import UpdatePostsController from "../../controllers/Posts/Post/UpdatePosts.controller";
import AuthUser from "../../middleware/AuthUser";
const routes = Router();

routes.get("/post/:id", FindOnePostController.handle);
routes.get("/post", FindAllPostsController.handle);
routes.post("/post", AuthUser, CreatePostController.handle);
routes.put("/post/:id", UpdatePostsController.handle);
routes.delete("/post/:id", DeletePostsController.handle);

export default routes;