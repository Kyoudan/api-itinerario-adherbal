import { Router } from "express";
import {FindAllFeaturedPostsController} from "../../controllers/FeaturedPosts/FindAllFeaturedPosts.controller";
import {CreateFeaturedPostsController} from "../../controllers/FeaturedPosts/CreateFeaturedPosts.controller";
import {UpdatedFeaturedPostsController} from "../../controllers/FeaturedPosts/UpdatedFeaturedPosts.controller";
import {DeleteFeaturedPostsController} from "../../controllers/FeaturedPosts/DeleteFeaturedPosts.controller";
import AuthAdmin from "../../middleware/AuthAdmin";
const routes = Router();

routes.get("/featuredposts", FindAllFeaturedPostsController);
routes.post("/featuredposts", AuthAdmin, CreateFeaturedPostsController);
routes.put("/featuredposts", AuthAdmin, UpdatedFeaturedPostsController);
routes.delete("/featuredposts/:uuid", AuthAdmin, DeleteFeaturedPostsController);

export default routes;
