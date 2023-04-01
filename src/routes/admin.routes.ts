import CreateAdminController from "../controllers/Admin/CreateAdmin.controller";
import LoginAdminController from "../controllers/Login/LoginAdmin.controller";
import { Router } from "express";
import UpdateAdminController from "../controllers/Admin/UpdateAdmin.controller";
import DeleteAdminController from "../controllers/Admin/DeleteAdmin.controller";
import FindAllAdminController from "../controllers/Admin/FindAllAdmin.controller";
import FindOneAdminController from "../controllers/Admin/FindOneAdmin.controller";
import AuthAdmin from "../middleware/AuthAdmin";
const routes = Router();

routes.get("/admins", AuthAdmin, FindAllAdminController.handle);
routes.get("/admins/:id", AuthAdmin, FindOneAdminController.handle);
routes.post("/loginadmin", AuthAdmin, LoginAdminController.handle);
routes.post("/admin", AuthAdmin, CreateAdminController.handle);
routes.put("/admin", AuthAdmin, UpdateAdminController.handle);
routes.delete("/admin", AuthAdmin, DeleteAdminController.handle);

export default routes;
