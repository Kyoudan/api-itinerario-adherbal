import { Router } from "express";
import FindAllFeaturedPostsController from "../../controllers/FeaturedPosts/FindAllFeaturedPosts.controller";
import CreateFeaturedPostsController from "../../controllers/FeaturedPosts/CreateFeaturedPosts.controller";
import UpdatedFeaturedPostsController from "../../controllers/FeaturedPosts/UpdatedFeaturedPosts.controller";
import DeleteFeaturedPostsController from "../../controllers/FeaturedPosts/DeleteFeaturedPosts.controller";
import AuthAdmin from "@/middleware/AuthAdmin";
const routes = Router();

routes.get("/featuredposts", AuthAdmin, FindAllFeaturedPostsController.handle);
routes.post("/featuredposts", AuthAdmin, CreateFeaturedPostsController.handle);
routes.put("/featuredposts", AuthAdmin, UpdatedFeaturedPostsController.handle);
routes.delete("/featuredposts", AuthAdmin, DeleteFeaturedPostsController.handle);

export default routes;
