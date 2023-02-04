import { NextFunction, Request, Response } from "express";
import { validateRequest } from "../../models/password";
import { httpSuccess } from "../../utils/httpResponses";

import { passwordStrength } from "check-password-strength";

/**
 * password request model
 * destructures request
 * validates shape & data
 * Throws error if wrong
 * returns password if right
 *
 * performs strength test
 * checks against dictionary
 *
 * password response model
 * validates shape going out
 *
 */

const passwordController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reqBody = req.body;
  const validatedRequestBody = validateRequest(reqBody);

  return httpSuccess(res, validatedRequestBody);
};

export default passwordController;
