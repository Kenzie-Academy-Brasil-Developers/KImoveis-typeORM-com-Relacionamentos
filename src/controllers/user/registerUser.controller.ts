import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import registerUserService from "../../services/user/registerUser.service";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";

const registerUsercontroller = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await registerUserService(userData);
  return res.status(201).json(newUser);
};

export default registerUsercontroller;
