import express, { Request, Response, NextFunction } from "express";
import passwordController from "../../controllers/password";
import { asyncCatchHandler } from "../../middleware/httpHandlers";

const router = express.Router();

router.get("/password", (req: Request, res: Response, next: NextFunction) =>
  asyncCatchHandler(passwordController(req, res, next))
);

export { router };
