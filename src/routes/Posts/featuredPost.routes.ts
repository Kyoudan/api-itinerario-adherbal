import { Router } from "express";
import FindAllFeaturedPostsController from "../../controllers/FeaturedPosts/FindAllFeaturedPosts.controller";
import CreateFeaturedPostsController from "../../controllers/FeaturedPosts/CreateFeaturedPosts.controller";
import UpdatedFeaturedPostsController from "../../controllers/FeaturedPosts/UpdatedFeaturedPosts.controller";
import DeleteFeaturedPostsController from "../../controllers/FeaturedPosts/DeleteFeaturedPosts.controller";
const routes = Router();

routes.get("/featuredposts", FindAllFeaturedPostsController.handle);
routes.post("/featuredposts", CreateFeaturedPostsController.handle);
routes.put("/featuredposts", UpdatedFeaturedPostsController.handle);
routes.delete("/featuredposts", DeleteFeaturedPostsController.handle);

export default routes;
