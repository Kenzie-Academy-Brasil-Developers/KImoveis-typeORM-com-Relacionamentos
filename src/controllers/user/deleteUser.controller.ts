import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";

const deleteUsercontroller = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const deletdUser = await deleteUserService(userId);
  return res.status(204).json(deletdUser);
};

export default deleteUsercontroller;
