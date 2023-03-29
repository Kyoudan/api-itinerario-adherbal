import { Router } from "express";
import CreatePostCategoriesController from "../controllers/PostCategories/CreatePostCategories.controller";
import DeletePostCategoriesController from "../controllers/PostCategories/DeletePostCategories.controller";
import FindAllPostCategoriesController from "../controllers/PostCategories/FindAllPostCategories.controller";
import FindOnePostCategoriesController from "../controllers/PostCategories/FindOnePostCategories.controller";
import UpdatePostCategoriesController from "../controllers/PostCategories/UpdatePostCategories.controller";
const routes = Router();

routes.get("/postCategories", FindAllPostCategoriesController.handle);
routes.get("/postCategories/:id", FindOnePostCategoriesController.handle);
routes.post("/postCategories", CreatePostCategoriesController.handle);
routes.put("/postCategories/:id", UpdatePostCategoriesController.handle);
routes.delete("/postCategories/:id", DeletePostCategoriesController.handle);

export default routes;
