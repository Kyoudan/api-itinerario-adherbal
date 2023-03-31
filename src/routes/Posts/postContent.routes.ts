import { Router } from "express";
import CreatePostContentController from "../../controllers/Posts/PostContent/CreatePostContent.controller";
const routes = Router();

routes.post("/postcontent", CreatePostContentController.handle)

export default routes;