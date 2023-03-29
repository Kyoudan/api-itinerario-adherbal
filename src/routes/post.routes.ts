import { Router } from "express";
import CreatePostController from "../controllers/Post/CreatePost.controller";
import AuthUser from "../middleware/AuthUser";
const routes = Router();

routes.post("/post", AuthUser, CreatePostController.handle);

export default routes;
