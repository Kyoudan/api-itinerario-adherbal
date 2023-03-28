import { Router } from "express";
import ActiveAccountController from "../controllers/Email/ActiveAccount.controller";
import CreateUserController from "../controllers/User/CreateUser.controller";
const routes = Router();

routes.post("/users", CreateUserController.handle);
routes.get("/activateAccount", ActiveAccountController.handle);

export default routes;
