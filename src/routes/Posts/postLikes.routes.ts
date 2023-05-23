import { Router } from "express";
import CreatePostLikesController from "../../controllers/Posts/PostLikes/CreatePostLikes.controller";
import FindAllPostLikesController from "../../controllers/Posts/PostLikes/FindAllPostLikes.controller";
import DeletePostLikesController from "../../controllers/Posts/PostLikes/DeletePostLikes.controller";
const routes = Router();

routes.post("/postLikes", CreatePostLikesController);
routes.get("/postlikes/:postId", FindAllPostLikesController);
routes.delete("/postlikes", DeletePostLikesController);

export default routes;
