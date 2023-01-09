import { Router } from "express";
import createCategoryController from "../controllers/category/createCategoryController";
import listCategoryByIdController from "../controllers/category/listCategoryByIdController";
import listCategoryController from "../controllers/category/listCategoryController";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "/categories",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  createCategoryController
);
categoriesRouter.get("/categories", listCategoryController);
categoriesRouter.get("/categories/:id/properties", listCategoryByIdController);

export default categoriesRouter;
