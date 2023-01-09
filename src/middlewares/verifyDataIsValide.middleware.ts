import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const verifyDataIsValideMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validateData = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body = validateData;
      return next();
    } catch (error) {
      return res.status(400).json({
        error: error.errors,
      });
    }
  };

export default verifyDataIsValideMiddleware;
