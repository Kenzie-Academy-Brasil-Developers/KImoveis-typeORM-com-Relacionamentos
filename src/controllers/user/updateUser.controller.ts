import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";
import { IUserUpdate } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";

const updateUsercontroller = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId: string = req.params.id;
  const updatedUser = await updateUserService(userData, userId);
  return res.status(200).json(updatedUser);
};

export default updateUsercontroller;
