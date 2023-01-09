import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";
import createschedulesService from "../../services/schedules/createschedulesService";

const createschedulesController = async (req: Request, res: Response) => {
  const { userId, propertyId, date, hour } = req.body;

  const schedules = await createschedulesService({
    userId,
    propertyId,
    date,
    hour,
  });
  return res.status(201).json({ message: schedules });
};

export default createschedulesController;
