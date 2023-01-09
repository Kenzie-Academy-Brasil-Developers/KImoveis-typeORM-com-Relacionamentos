import { Router } from "express";
import createschedulesController from "../controllers/schedules/createschedulesController";
import listchedulesController from "../controllers/schedules/listchedulesController";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
const schedulesRouter = Router();

schedulesRouter.post(
  "/schedules",
  verifyAuthMiddleware,
  createschedulesController
);
schedulesRouter.get(
  "/schedules/properties/:id",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  listchedulesController
);

export default schedulesRouter;
