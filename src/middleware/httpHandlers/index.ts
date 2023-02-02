import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // console.log(error.stack, error.name)
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
  console.log(status, body);
  return response.status(status)?.json(body);
};

export const asyncCatchHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
