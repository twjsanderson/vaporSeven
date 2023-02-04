"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password_1 = require("../../models/password");
const httpResponses_1 = require("../../utils/httpResponses");
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
const passwordController = (req, res, next) => {
    const reqBody = req.body;
    const validatedRequestBody = (0, password_1.validateRequest)(reqBody);
    return (0, httpResponses_1.httpSuccess)(res, validatedRequestBody);
};
exports.default = passwordController;
