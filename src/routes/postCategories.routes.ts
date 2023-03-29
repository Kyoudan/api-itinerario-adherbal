import { Router } from "express";
import CreatePostTagsController from "../controllers/PostTags/CreatePostTags.controller";
import DeletePostTagsController from "../controllers/PostTags/DeletePostTags.controller";
import FindAllPostTagsController from "../controllers/PostTags/FindAllPostTags.controller";
import FindOnePostTagsController from "../controllers/PostTags/FindOnePostTags.controller";
import UpdatePostTagsController from "../controllers/PostTags/UpdatePostTags.controller";
const routes = Router();

routes.get("/postTags", FindAllPostTagsController.handle);
routes.get("/postTags/:id", FindOnePostTagsController.handle);
routes.post("/postTags", CreatePostTagsController.handle);
routes.put("/postTags/:id", UpdatePostTagsController.handle);
routes.delete("/postTags/:id", DeletePostTagsController.handle);

export default routes;
