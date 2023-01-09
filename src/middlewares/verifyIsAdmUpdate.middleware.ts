import { Request, Response, NextFunction, response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const verifyIsAdmUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let permitedChange: boolean = false;
  const id = req.params.id;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.isAdm) {
    permitedChange = true;
  } else {
    if (id == user.id) {
      permitedChange = true;
    }
  }

  if (!permitedChange) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return next();
};
export default verifyIsAdmUpdateMiddleware;
