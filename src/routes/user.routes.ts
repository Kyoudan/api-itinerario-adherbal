import { Router } from "express";
import { ActiveAccountController } from "../controllers/Email/ActiveAccount.controller";
import { LoginUserController } from "../controllers/Login/LoginUser.controller";
import { CreateUserController } from "../controllers/User/CreateUser.controller";
import { DeleteUserController } from "../controllers/User/DeleteUser.controller";
import { FindAllUsersController } from "../controllers/User/FindAllUsers.controller";
import { FindOneUserController } from "../controllers/User/FindOneUser.controller";
import { UpdateUserController } from "../controllers/User/UpdateUser.controller";
import AuthUser from "../middleware/AuthUser";
import { VerifyTokenUserController } from "../controllers/User/VerifyTokenUser.controller";
import AuthAdmin from "../middleware/AuthAdmin";
const routes = Router();

routes.get("/users", AuthAdmin, FindAllUsersController);
routes.get("/users/:id", FindOneUserController);
routes.post("/users", CreateUserController);
routes.post("/login", LoginUserController);
routes.post("/verifytoken", VerifyTokenUserController);
routes.put("/users", AuthUser, UpdateUserController);
routes.delete("/users", AuthUser, DeleteUserController);
routes.get("/activateAccount", ActiveAccountController);

export default routes;
