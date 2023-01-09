import { Router } from "express";
import createPropertieController from "../controllers/propertie/createPropertieController";
import listPropertieController from "../controllers/propertie/listPropertieController";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const propertiesRouter = Router();

propertiesRouter.post(
  "/properties",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  createPropertieController
);
propertiesRouter.get("/properties", listPropertieController);

export default propertiesRouter;
