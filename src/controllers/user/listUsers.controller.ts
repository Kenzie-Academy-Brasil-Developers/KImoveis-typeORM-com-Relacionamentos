import { Request, Response } from "express";
import listUsersService from "../../services/user/listUsers.service";
import { AppError } from "../../errors/AppError";
import handleError from "../../errors/handleError";

const listUserscontroller = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(users);
};

export default listUserscontroller;
