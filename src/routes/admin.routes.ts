import CreateAdminController from "@/controllers/Admin/CreateAdmin.controller";
import LoginAdminController from "../controllers/Login/LoginAdmin.controller";
import { Router } from "express";
const routes = Router();

routes.post("/loginadmin", LoginAdminController.handle);
routes.post("/admin", CreateAdminController.handle);

export default routes;
