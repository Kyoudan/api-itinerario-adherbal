import { Router } from "express";
import CreatePostContentTypeController from "../../controllers/Posts/PostContentType/CreatePostContentType.controller";
import DeletePostContentTypeController from "../../controllers/Posts/PostContentType/DeletePostContentType.controller";
import FindAllPostContentTypeController from "../../controllers/Posts/PostContentType/FindAllPostContentType.controller";
import FindOnePostContentTypeController from "../../controllers/Posts/PostContentType/FindOnePostContentType.controller";
import UpdatePostContentTypeController from "../../controllers/Posts/PostContentType/UpdatePostContentType.controller";
const routes = Router();

routes.get("/postcontenttype", FindAllPostContentTypeController.handle);
routes.get("/postcontenttype/:id", FindOnePostContentTypeController.handle);
routes.post("/postcontenttype", CreatePostContentTypeController.handle);
routes.put("/postcontenttype/:id", UpdatePostContentTypeController.handle);
routes.delete("/postcontenttype/:id", DeletePostContentTypeController.handle);

export default routes;
