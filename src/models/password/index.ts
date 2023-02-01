import { Express, Request, Response } from 'express';
import { passwordStrength } from 'check-password-strength'

const PASSWORD = 'password';
const ISCOMMON = 'isCommon';

interface requestBody {
    password: string;
    isCommon?: boolean;
}

interface responseBody {
    status: string;
}

export const request = (reqBody: requestBody) => {
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

// export const response = (res: Response) => {

// }
