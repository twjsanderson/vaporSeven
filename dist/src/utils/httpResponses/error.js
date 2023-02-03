"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestError = void 0;
class BaseError extends Error {
    constructor() {
        super();
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
class HttpRequestError extends BaseError {
    constructor(status, name, message) {
        super();
        this.status = status;
        this.name = name;
        this.message = message;
    }
}
exports.HttpRequestError = HttpRequestError;
