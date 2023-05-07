import { Router } from "express";
import { ActiveAccountController } from "../controllers/Email/ActiveAccount.controller";
import { LoginUserController } from "../controllers/Login/LoginUser.controller";
import CreateUserController from "../controllers/User/CreateUser.controller";
import DeleteuserController from "../controllers/User/DeleteUser.controller";
import FindAllUsersController from "../controllers/User/FindAllUsers.controller";
import FindOneUserController from "../controllers/User/FindOneUser.controller";
import UpdateUserController from "../controllers/User/UpdateUser.controller";
import AuthUser from "../middleware/AuthUser";
import VerifyTokenUserController from "../controllers/User/VerifyTokenUser.controller";
import AuthAdmin from "../middleware/AuthAdmin";
const routes = Router();

routes.get("/users", AuthAdmin, FindAllUsersController.handle);
routes.get("/users/:id", FindOneUserController.handle);
routes.post("/users", CreateUserController.handle);
routes.post("/login", LoginUserController);
routes.post("/verifytoken", VerifyTokenUserController.handle);
routes.put("/users", AuthUser, UpdateUserController.handle);
routes.delete("/users", AuthUser, DeleteuserController.handle);
routes.get("/activateAccount", ActiveAccountController);

export default routes;
