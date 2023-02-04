"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const httpResponses_1 = require("../../utils/httpResponses");
const PASSWORD = "password";
const CHECK_COMMONALITY = "checkCommonality";
// interface responseBody {
//   status: string;
// }
const validateRequest = (reqBody) => {
    let error = false;
    const reqBodyKeys = Object.keys(reqBody);
    // Verify request shape
    if (reqBodyKeys.length > 2 ||
        !reqBodyKeys.includes(PASSWORD) ||
        (reqBodyKeys.length === 2 && !reqBodyKeys.includes(CHECK_COMMONALITY))) {
        error = true;
    }
    const { password, checkCommonality } = reqBody;
    // Validate password field
    if (password === undefined ||
        typeof password !== "string" ||
        password.length > 127 ||
        !password.length) {
        error = true;
    }
    // Validate checkCommonality field if present
    if (checkCommonality !== undefined && typeof checkCommonality !== "boolean") {
        error = true;
    }
    return error ? (0, httpResponses_1.httpBadRequest)("/password") : reqBody;
};
exports.validateRequest = validateRequest;
// export const response = (res: Response) => {
// }
