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
import { FindAllByTagController } from "../../controllers/Posts/Post/FindAllByTag.controller";
import { FindAllPostsPublicController } from "../../controllers/Posts/Post/FindAllPostsPublic.controller";
import { FindAllPostsPrivateController } from "../../controllers/Posts/Post/FindAllPostsPrivate.controller";
const routes = Router();

routes.get("/post/:uuid", FindOnePostController);
routes.get("/post", FindAllPostsController);
routes.get("/posts/slug", FindOnePostByNameController);
routes.get("/postsbytag", FindAllByTagController);
routes.get("/postspublic", FindAllPostsPublicController);
routes.get("/postsprivate", AuthAdmin, FindAllPostsPrivateController);

routes.post("/post", AuthAdmin, CreatePostController);
routes.post("/publish/:id", AuthAdmin, PublishingPostController);

routes.put("/postAll", AuthAdmin, UpdateAllPostController);
routes.put("/post/:id", UpdatePostsController);

routes.delete("/post/:uuid", DeletePostsController);

export default routes;
