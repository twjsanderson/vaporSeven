"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCatchHandler = exports.successHandler = exports.errorHandler = exports.initalRequestHandler = void 0;
const httpResponses_1 = require("../../utils/httpResponses");
const initalRequestHandler = (req, res, next) => {
    const MAX_REQ_BODY_SIZE = 5;
    const body = req === null || req === void 0 ? void 0 : req.body;
    const bodySize = Object.keys(body).length;
    if (req.header("Content-Type") !== "application/json; charset=utf-8" ||
        body === undefined ||
        typeof body !== "object" ||
        body === null ||
        bodySize > MAX_REQ_BODY_SIZE) {
        return (0, httpResponses_1.httpBadRequest)("/");
    }
    next();
};
exports.initalRequestHandler = initalRequestHandler;
const errorHandler = (error, request, response, next) => {
    // console.log(error.stack, error.name);
    const status = error.status;
    return response.status(status).json({
        name: error.name,
        message: error.message,
    });
};
exports.errorHandler = errorHandler;
const successHandler = (response, status, body) => {
    var _a;
    // console.log(status, body);
    return (_a = response.status(status)) === null || _a === void 0 ? void 0 : _a.json(body);
};
exports.successHandler = successHandler;
const asyncCatchHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);
exports.asyncCatchHandler = asyncCatchHandler;
