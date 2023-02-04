"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const password_1 = __importDefault(require("../../controllers/password"));
const httpHandlers_1 = require("../../middleware/httpHandlers");
const router = express_1.default.Router();
exports.router = router;
router.get("/password", (req, res, next) => (0, httpHandlers_1.asyncCatchHandler)((0, password_1.default)(req, res, next)));
