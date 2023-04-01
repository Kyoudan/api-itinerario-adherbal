import LoginAdminController from "../controllers/Login/LoginAdmin.controller";
import { Router } from "express";
const routes = Router();

routes.post("/loginadmin", LoginAdminController.handle);

export default routes;
