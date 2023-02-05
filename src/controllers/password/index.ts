import { NextFunction, Request, Response } from "express";
import { validateRequest } from "../../models/password";
import { httpSuccess } from "../../utils/httpResponses";
import { checkPasswordStrength } from "../../utils/checkPasswordStrength";

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
  const { password } = validatedRequestBody;

  // TODO: if password is common, mark it true
  const isCommon: boolean = false;

  const strength = checkPasswordStrength(password);
  console.log(strength);

  // format response

  return httpSuccess(res, validatedRequestBody);
};

export default passwordController;
