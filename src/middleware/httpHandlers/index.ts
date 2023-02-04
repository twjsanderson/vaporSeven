import { Request, Response, NextFunction } from "express";
import { httpBadRequest } from "../../utils/httpResponses";

export const initalRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const MAX_REQ_BODY_SIZE = 5;
  const body = req?.body;
  const bodySize = Object.keys(body).length;

  if (
    req.header("Content-Type") !== "application/json; charset=utf-8" ||
    body === undefined ||
    typeof body !== "object" ||
    body === null ||
    bodySize > MAX_REQ_BODY_SIZE
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
  (fn: any) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
