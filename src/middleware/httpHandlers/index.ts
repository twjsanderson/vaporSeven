import { Request, Response, NextFunction } from "express";
import { httpBadRequest } from "../../utils/httpResponses";

export const requestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.header("Content-Type"), req.body);
  if (
    req.header("Content-Type") !== "application/json; charset=utf-8" ||
    req.body === undefined
    // not object ?
    // limit object fields size?
  ) {
    return httpBadRequest("/");
  }
  next();
};

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // console.log(error.stack, error.name);
  const status = error.status;
  return response.status(status).json({
    name: error.name,
    message: error.message,
  });
};

export const successHandler = (
  response: Response,
  status: number,
  body?: any
) => {
  // console.log(status, body);
  return response.status(status)?.json(body);
};

export const asyncCatchHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
