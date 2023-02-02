import express, { Request, Response, NextFunction } from "express";
import { asyncCatchHandler } from "../../middleware/httpHandlers";

const router = express.Router();

router.get("/password", (req: Request, res: Response, next: NextFunction) => {
  // formulate res, req and next?
  // asyncCatch();
});

export { router };
