"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const httpResponses_1 = require("../../utils/httpResponses");
const PASSWORD = "password";
const ISCOMMON = "isCommon";
// interface responseBody {
//   status: string;
// }
const request = (reqBody) => {
    console.log(reqBody);
    let error = false;
    const reqBodyKeys = Object.keys(reqBody);
    // Verify request shape
    if (reqBodyKeys.length > 2 ||
        !reqBodyKeys.includes(PASSWORD) ||
        (reqBodyKeys.length === 2 && !reqBodyKeys.includes(ISCOMMON))) {
        error = true;
    }
    const { password, isCommon } = reqBody;
    // Validate password
    if (typeof password !== "string" ||
        password.length > 127 ||
        !password.length) {
        error = true;
    }
    // Validate isCommon if present
    if (isCommon !== undefined && typeof isCommon !== "boolean") {
        error = true;
    }
    return error ? (0, httpResponses_1.httpBadRequest)("/password") : reqBody;
};
exports.request = request;
// export const response = (res: Response) => {
// }
