import { Router } from "express";
import ActiveAccountController from "../controllers/Email/ActiveAccount.controller";
import LoginUserController from "../controllers/Login/LoginUser.controller";
import CreateUserController from "../controllers/User/CreateUser.controller";
import FindAllUsersController from "../controllers/User/FindAllUsers.controller";
import FindOneUserController from "../controllers/User/FindOneUser.controller";
const routes = Router();

routes.get("/users", FindAllUsersController.handle);
routes.get("/users/:id", FindOneUserController.handle);
routes.post("/users", CreateUserController.handle);
routes.post("/login", LoginUserController.handle);
routes.get("/activateAccount", ActiveAccountController.handle);

export default routes;
