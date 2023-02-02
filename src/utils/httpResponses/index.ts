import { Response } from "express";
import { HttpRequestError } from "./error";
import { successHandler } from "../../middleware/httpHandlers";

/** Error Responses */

export const httpBadRequest = (name: string) => {
  throw new HttpRequestError(400, name, "Invalid or malformed request.");
};

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

export const httpSuccess = (response: Response, body?: any) => {
  return successHandler(response, 200, body);
};

export const httpAccepted = (response: Response, body: any) => {
  return successHandler(response, 202, body);
};
