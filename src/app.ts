import express from "express";
import "reflect-metadata";
import "express-async-errors";
import routes from "./routers/user.routes";
import catroutes from "./routers/categories.routers";
import proproutes from "./routers/properties.routers";
import schroutes from "./routers/schedules.routers";
import handleError from "./errors/handleError";
import { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(routes);
app.use(catroutes);
app.use(proproutes);
app.use(schroutes);

app.use(handleError);

export default app;
