import { Router } from "express";
import { CreatePostTagsController } from "../../controllers/Posts/PostTags/CreatePostTags.controller";
import { DeletePostTagsController } from "../../controllers/Posts/PostTags/DeletePostTags.controller";
import { FindAllPostTagsController } from "../../controllers/Posts/PostTags/FindAllPostTags.controller";
import { FindOnePostTagsController } from "../../controllers/Posts/PostTags/FindOnePostTags.controller";
import { UpdatePostTagsController } from "../../controllers/Posts/PostTags/UpdatePostTags.controller";
import AuthAdmin from "../..//middleware/AuthAdmin";
const routes = Router();

routes.get("/postTags", FindAllPostTagsController);
routes.get("/postTags/:id", FindOnePostTagsController);
routes.post("/postTags", AuthAdmin, CreatePostTagsController);
routes.put("/postTags/:id", AuthAdmin, UpdatePostTagsController);
routes.delete("/postTags/:id", AuthAdmin, DeletePostTagsController);

export default routes;
