import { Express, Request, Response } from "express";
import { passwordStrength } from "check-password-strength";
import { httpBadRequest } from "../../utils/httpResponses";

const PASSWORD = "password";
const ISCOMMON = "isCommon";

interface requestBody {
  password: string;
  isCommon?: boolean;
}

// interface responseBody {
//   status: string;
// }

export const request = (reqBody: requestBody) => {
  console.log(reqBody);
  let error: boolean = false;
  const reqBodyKeys = Object.keys(reqBody);

  // Verify request shape
  if (
    reqBodyKeys.length > 2 ||
    !reqBodyKeys.includes(PASSWORD) ||
    (reqBodyKeys.length === 2 && !reqBodyKeys.includes(ISCOMMON))
  ) {
    error = true;
  }

  const { password, isCommon } = reqBody;

  // Validate password
  if (
    typeof password !== "string" ||
    password.length > 127 ||
    !password.length
  ) {
    error = true;
  }

  // Validate isCommon if present
  if (isCommon !== undefined && typeof isCommon !== "boolean") {
    error = true;
  }

  return error ? httpBadRequest("/password") : reqBody;
};

// export const response = (res: Response) => {

// }
