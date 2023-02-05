"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const httpResponses_1 = require("../../utils/httpResponses");
const constants_1 = require("../../resources/constants");
const validateRequest = (reqBody) => {
    let error = false;
    const reqBodyKeys = Object.keys(reqBody);
    // Validate request body shape
    if (reqBodyKeys.length > 2 || !reqBodyKeys.includes(constants_1.PASSWORD)) {
        error = true;
    }
    const { password } = reqBody;
    // Validate password field
    if (password === undefined ||
        typeof password !== "string" ||
        password.length > 127 ||
        !password.length) {
        error = true;
    }
    return error ? (0, httpResponses_1.httpBadRequest)("/password") : reqBody;
};
exports.validateRequest = validateRequest;
// export const response = (res: Response): IResponseBody => {
//   return {};
// };
