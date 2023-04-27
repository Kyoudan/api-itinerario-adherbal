import { Router } from "express";
import CreatePostTagsController from "../../controllers/Posts/PostTags/CreatePostTags.controller";
import DeletePostTagsController from "../../controllers/Posts/PostTags/DeletePostTags.controller";
import FindAllPostTagsController from "../../controllers/Posts/PostTags/FindAllPostTags.controller";
import FindOnePostTagsController from "../../controllers/Posts/PostTags/FindOnePostTags.controller";
import UpdatePostTagsController from "../../controllers/Posts/PostTags/UpdatePostTags.controller";
import AuthAdmin from "../..//middleware/AuthAdmin";
const routes = Router();

routes.get("/postTags", AuthAdmin, FindAllPostTagsController.handle);
routes.get("/postTags/:id", AuthAdmin, FindOnePostTagsController.handle);
routes.post("/postTags", AuthAdmin, CreatePostTagsController.handle);
routes.put("/postTags/:id", AuthAdmin, UpdatePostTagsController.handle);
routes.delete("/postTags/:id", AuthAdmin, DeletePostTagsController.handle);

export default routes;
