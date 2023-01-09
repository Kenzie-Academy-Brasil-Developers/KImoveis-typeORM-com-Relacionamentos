import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";
import createCategoryService from "../../services/category/createCategoryService";

const createCategoryController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const category = await createCategoryService(name);
  return res.status(201).json(category);
};

export default createCategoryController;
