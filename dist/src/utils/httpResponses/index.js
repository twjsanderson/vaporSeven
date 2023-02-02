"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAccepted = exports.httpSuccess = exports.httpBadRequest = void 0;
const error_1 = require("./error");
const httpHandlers_1 = require("../../middleware/httpHandlers");
/** Error Responses */
const httpBadRequest = (name) => {
    throw new error_1.HttpRequestError(400, name, "Invalid or malformed request.");
};
exports.httpBadRequest = httpBadRequest;
// static unauthorized = (resource) => {
// throw new HttpRequestError(401, resource, 'Unauthorized, please sign in to use resource')
// };
// static notFound = (resource) => {
// throw new HttpRequestError(404, resource, 'Resource not found.')
// };
// static methodNotAllowed = (resource) => {
// throw new HttpRequestError(405, resource, 'Method not allowed for this resource.')
// };
// static unprocessableEntity = (resource) => {
// throw new HttpRequestError(422, resource, 'The request was well-formed but unprocessable due to semantic errors')
// };
// // add how time limit here
// static tooManyRequests = (resource) => {
// throw new HttpRequestError(429, resource, 'Too many requests made')
// };
// static internalServerError = (resource) => {
// throw new HttpRequestError(500, resource, 'Internal Server Error')
// };
// };
/** Success Responses **/
const httpSuccess = (response, body) => {
    return (0, httpHandlers_1.successHandler)(response, 200, body);
};
exports.httpSuccess = httpSuccess;
const httpAccepted = (response, body) => {
    return (0, httpHandlers_1.successHandler)(response, 202, body);
};
exports.httpAccepted = httpAccepted;
