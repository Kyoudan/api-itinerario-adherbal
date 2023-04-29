import CreateAdminController from "../controllers/Admin/CreateAdmin.controller";
import LoginAdminController from "../controllers/Login/LoginAdmin.controller";
import { Router } from "express";
import UpdateAdminController from "../controllers/Admin/UpdateAdmin.controller";
import DeleteAdminController from "../controllers/Admin/DeleteAdmin.controller";
import FindAllAdminController from "../controllers/Admin/FindAllAdmin.controller";
import FindOneAdminController from "../controllers/Admin/FindOneAdmin.controller";
import AuthAdmin from "../middleware/AuthAdmin";
import VerifyTokenAdminController from "../controllers/Admin/VerifyTokenAdmin.controller";
import UpdateImageAdminController from "../controllers/Admin/UpdateImageAdmin.controller";
const routes = Router();

routes.get("/admins", AuthAdmin, FindAllAdminController.handle);
routes.get("/admins/:id", AuthAdmin, FindOneAdminController.handle);
routes.post("/loginadmin", LoginAdminController.handle);
routes.post("/admin", AuthAdmin, CreateAdminController.handle);
routes.post("/verifytokenadm", VerifyTokenAdminController.handle);
routes.put("/admin", AuthAdmin, UpdateAdminController.handle);
routes.put("/adminimage", AuthAdmin, UpdateImageAdminController.handle);
routes.delete("/admin", AuthAdmin, DeleteAdminController.handle);

export default routes;
