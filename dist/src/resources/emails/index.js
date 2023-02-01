"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disposableEmails = exports.emails = void 0;
const one_1 = require("./one");
const two_1 = require("./two");
const disposableEmails_1 = require("./disposableEmails");
Object.defineProperty(exports, "disposableEmails", { enumerable: true, get: function () { return disposableEmails_1.disposableEmails; } });
const emails = [
    one_1.one,
    two_1.two
];
exports.emails = emails;
