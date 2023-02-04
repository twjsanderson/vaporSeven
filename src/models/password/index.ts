import { httpBadRequest } from "../../utils/httpResponses";

const PASSWORD = "password";
const CHECK_COMMONALITY = "checkCommonality";

interface requestBody {
  password: string;
  checkCommonality?: boolean;
}

// interface responseBody {
//   status: string;
// }

export const validateRequest = (reqBody: requestBody) => {
  let error: boolean = false;
  const reqBodyKeys = Object.keys(reqBody);

  // Verify request shape
  if (
    reqBodyKeys.length > 2 ||
    !reqBodyKeys.includes(PASSWORD) ||
    (reqBodyKeys.length === 2 && !reqBodyKeys.includes(CHECK_COMMONALITY))
  ) {
    error = true;
  }

  const { password, checkCommonality } = reqBody;

  // Validate password field
  if (
    password === undefined ||
    typeof password !== "string" ||
    password.length > 127 ||
    !password.length
  ) {
    error = true;
  }

  // Validate checkCommonality field if present
  if (checkCommonality !== undefined && typeof checkCommonality !== "boolean") {
    error = true;
  }

  return error ? httpBadRequest("/password") : reqBody;
};

// export const response = (res: Response) => {

// }
