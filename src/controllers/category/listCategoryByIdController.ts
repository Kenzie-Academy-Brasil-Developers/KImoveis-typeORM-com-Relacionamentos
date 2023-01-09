import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";
import listCategoryByIdService from "../../services/category/listCategoryByIdService";

const listCategoryByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const categories = await listCategoryByIdService(id);
  return res.status(200).json(categories);
};

export default listCategoryByIdController;
