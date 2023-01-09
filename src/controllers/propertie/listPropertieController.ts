import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";
import listPropertieService from "../../services/propertie/listPropertieService";

const listPropertieController = async (req: Request, res: Response) => {
  const properties = await listPropertieService();

  return res.json(properties);
};

export default listPropertieController;
