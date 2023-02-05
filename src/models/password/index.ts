import { httpBadRequest } from "../../utils/httpResponses";
import { IPasswordRequestBody, IPasswordResponseBody } from "../../types";
import { PASSWORD } from "../../resources/constants";

export const validateRequest = (
  reqBody: IPasswordRequestBody
): IPasswordRequestBody => {
  let error: boolean = false;
  const reqBodyKeys = Object.keys(reqBody);

  // Validate request body shape
  if (reqBodyKeys.length > 2 || !reqBodyKeys.includes(PASSWORD)) {
    error = true;
  }

  const { password } = reqBody;

  // Validate password field
  if (
    password === undefined ||
    typeof password !== "string" ||
    password.length > 127 ||
    !password.length
  ) {
    error = true;
  }

  return error ? httpBadRequest("/password") : reqBody;
};

// export const response = (res: Response): IResponseBody => {
//   return {};
// };
