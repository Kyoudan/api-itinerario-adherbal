import { Router } from "express";
import { CreatePostController } from "../../controllers/Posts/Post/CreatePostscontroller";
import { DeletePostsController } from "../../controllers/Posts/Post/DeletePosts.controller";
import { FindAllPostsController } from "../../controllers/Posts/Post/FindAllPosts.controller";
import { FindOnePostController } from "../../controllers/Posts/Post/FindOnePost.controller";
import { UpdatePostsController } from "../../controllers/Posts/Post/UpdatePosts.controller";
import AuthAdmin from "../../middleware/AuthAdmin";
import { FindOnePostByNameController } from "../../controllers/Posts/Post/FindOnePostByName.controller";
import { UpdateAllPostController } from "../../controllers/Posts/Post/UpdateAllPost.controller";
import { PublishingPostController } from "../../controllers/Posts/Post/PublishingPost.controller";
const routes = Router();

routes.get("/post/:uuid", FindOnePostController);
routes.get("/post", AuthAdmin, FindAllPostsController);
routes.get("/posts/slug", FindOnePostByNameController);
routes.post("/post", AuthAdmin, CreatePostController);
routes.post("/publish/:id", AuthAdmin, PublishingPostController);
routes.put("/postAll", AuthAdmin, UpdateAllPostController);
routes.put("/post/:id", UpdatePostsController);
routes.delete("/post/:id", DeletePostsController);

export default routes;
