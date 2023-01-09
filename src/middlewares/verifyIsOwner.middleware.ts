import { Request, Response, NextFunction } from "express";
AppDataSource;
import "dotenv/config";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const verifyIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (id !== user.id) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }

  return next();
};

export default verifyIsOwnerMiddleware;
