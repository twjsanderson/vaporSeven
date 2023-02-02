"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCatchHandler = exports.successHandler = exports.errorHandler = void 0;
const errorHandler = (error, request, response, next) => {
    // console.log(error.stack, error.name)
    const status = error.status;
    return response.status(status).json({
        name: error.name,
        message: error.message,
    });
};
exports.errorHandler = errorHandler;
const successHandler = (response, status, body) => {
    var _a;
    console.log(status, body);
    return (_a = response.status(status)) === null || _a === void 0 ? void 0 : _a.json(body);
};
exports.successHandler = successHandler;
const asyncCatchHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);
exports.asyncCatchHandler = asyncCatchHandler;
