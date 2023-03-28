import { Router } from "express";
import ActiveAccountController from "../controllers/Email/ActiveAccount.controller";
import LoginUserController from "../controllers/Login/LoginUser.controller";
import CreateUserController from "../controllers/User/CreateUser.controller";
const routes = Router();

routes.post("/users", CreateUserController.handle);
routes.post("/login", LoginUserController.handle);
routes.get("/activateAccount", ActiveAccountController.handle);

export default routes;
