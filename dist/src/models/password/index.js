"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const PASSWORD = "password";
const ISCOMMON = "isCommon";
const request = (reqBody) => {
    return true;
    // const reqBodyKeys = Object.keys(reqBody);
    // if (reqBodyKeys) {
    //     return true;
    // }
    // return false;
    // // verify data shape
    // if (
    //     reqBodyKeys > 2 ||
    //     !reqBodyKeys.includes(PASSWORD) ||
    //     (reqBodyKeys.length === 2 && !reqBodyKeys.includes(ISCOMMON))
    // ) {
    //     return 403;
    // }
    // const { password, isCommon } = reqBody;
    // // validate password
    // if (typeof password !== 'string') {
    //     throw new Error('password must be string')
    // }
    // if (password.length > 127 || !password.length) {
    //     throw new Error('password must be between 1 and 127 characters in length')
    // }
    // // do password strength test
    // // check against dictionary
    // // create response object
    // const res = { status: 'success' };
    // return res
};
exports.request = request;
// export const response = (res: Response) => {
// }
