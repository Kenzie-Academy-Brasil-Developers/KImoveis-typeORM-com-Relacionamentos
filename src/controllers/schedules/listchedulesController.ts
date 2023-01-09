import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";
import listchedulesService from "../../services/schedules/listchedulesService";
const listchedulesController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const schedules = await listchedulesService(id);
  return res.json(schedules);
};

export default listchedulesController;
