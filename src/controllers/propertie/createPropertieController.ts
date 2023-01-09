import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertieService from "../../services/propertie/createPropertieService";

const createPropertieController = async (req: Request, res: Response) => {
  const { address, size, value, categoryId }: IPropertyRequest = req.body;

  const propertie = await createPropertieService({
    address,
    categoryId,
    size,
    value,
  });

  return res.status(201).json(propertie);
};

export default createPropertieController;
