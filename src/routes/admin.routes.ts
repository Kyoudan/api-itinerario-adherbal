import CreateAdminController from "@/controllers/Admin/CreateAdmin.controller";
import LoginAdminController from "../controllers/Login/LoginAdmin.controller";
import { Router } from "express";
import UpdateAdminController from "@/controllers/Admin/UpdateAdmin.controller";
const routes = Router();

routes.post("/loginadmin", LoginAdminController.handle);
routes.post("/admin", CreateAdminController.handle);
routes.put("/admin", UpdateAdminController.handle);

export default routes;
