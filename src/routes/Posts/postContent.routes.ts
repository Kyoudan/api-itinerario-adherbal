import { Router } from "express";
import CreatePostContentController from "../../controllers/Posts/PostContent/CreatePostContent.controller";
import FindOnePostContentController from "../../controllers/Posts/PostContent/FindOnePostContent.controller";
import UpdatePostContentController from "../../controllers/Posts/PostContent/UpdatePostContent.controller";
import DeletePostContentController from "../../controllers/Posts/PostContent/DeletePostContent.controller";
const routes = Router();

routes.get("/postcontent/:id", FindOnePostContentController.handle);
routes.post("/postcontent", CreatePostContentController.handle);
routes.put("/postcontent/:id", UpdatePostContentController.handle);
routes.delete("/postcontent/:id", DeletePostContentController.handle);

export default routes;
