import { Router } from "express";
import CreatePostController from "../../controllers/Posts/Post/CreatePostscontroller";
import DeletePostsController from "../../controllers/Posts/Post/DeletePosts.controller";
import FindAllPostsController from "../../controllers/Posts/Post/FindAllPosts.controller";
import FindOnePostController from "../../controllers/Posts/Post/FindOnePost.controller";
import UpdatePostsController from "../../controllers/Posts/Post/UpdatePosts.controller";
import AuthAdmin from "../../middleware/AuthAdmin";
import FindOnePostBySlugController from "../../controllers/Posts/Post/FindOnePostByName.controller";
import UpdateAllPostController from "../../controllers/Posts/Post/UpdateAllPost.controller";
import PublishingPostController from "../../controllers/Posts/Post/PublishingPost.controller";
const routes = Router();

routes.get("/post/:uuid", FindOnePostController.handle);
routes.get("/post", AuthAdmin, FindAllPostsController.handle);
routes.get("/posts/slug", FindOnePostBySlugController.handle);
routes.post("/post", AuthAdmin, CreatePostController.handle);
routes.post("/publish/:id", AuthAdmin, PublishingPostController.handle);
routes.put("/postAll", AuthAdmin, UpdateAllPostController.handle);
routes.put("/post/:id", UpdatePostsController.handle);
routes.delete("/post/:id", DeletePostsController.handle);

export default routes;
