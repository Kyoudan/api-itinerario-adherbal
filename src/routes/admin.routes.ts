import CreateAdminController from "@/controllers/Admin/CreateAdmin.controller";
import LoginAdminController from "../controllers/Login/LoginAdmin.controller";
import { Router } from "express";
import UpdateAdminController from "@/controllers/Admin/UpdateAdmin.controller";
import DeleteAdminController from "@/controllers/Admin/DeleteAdmin.controller";
import FindAllAdminController from "@/controllers/Admin/FindAllAdmin.controller";
import FindOneAdminController from "@/controllers/Admin/FindOneAdmin.controller";
const routes = Router();

routes.get("/admins", FindAllAdminController.handle)
routes.get("/admins/:id", FindOneAdminController.handle)
routes.post("/loginadmin", LoginAdminController.handle);
routes.post("/admin", CreateAdminController.handle);
routes.put("/admin", UpdateAdminController.handle);
routes.delete("/admin", DeleteAdminController.handle);

export default routes;
