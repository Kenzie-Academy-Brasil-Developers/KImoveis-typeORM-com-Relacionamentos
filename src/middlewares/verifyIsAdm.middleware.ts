import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import "dotenv/config";

const verifyIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(403).json({
      message: "Not authorized",
    });
  }

  return next();
};

export default verifyIsAdmMiddleware;
