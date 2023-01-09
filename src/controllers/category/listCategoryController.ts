import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";
import listCategoryService from "../../services/category/listCategoryService";

const listCategoryController = async (req: Request, res: Response) => {
  const categories = await listCategoryService();
  return res.status(200).json(categories);
};

export default listCategoryController;
