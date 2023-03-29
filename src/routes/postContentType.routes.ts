import { Router } from "express";
import CreatePostContentTypeController from "../controllers/PostContentType/CreatePostContentType.controller";
import DeletePostContentTypeController from "../controllers/PostContentType/DeletePostContentType.controller";
import FindAllPostContentTypeController from "../controllers/PostContentType/FindAllPostContentType.controller";
import FindOnePostContentTypeController from "../controllers/PostContentType/FindOnePostContentType.controller";
import UpdatePostContentTypeController from "../controllers/PostContentType/UpdatePostContentType.controller";
const routes = Router();

routes.get("/postcontenttype", FindAllPostContentTypeController.handle);
routes.get("/postcontenttype/:id", FindOnePostContentTypeController.handle);
routes.post("/postcontenttype", CreatePostContentTypeController.handle);
routes.put("/postcontenttype/:id", UpdatePostContentTypeController.handle);
routes.delete("/postcontenttype/:id", DeletePostContentTypeController.handle);

export default routes;
