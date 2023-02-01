"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.additionalDomains = exports.JSONDomains = void 0;
const one_json_1 = __importDefault(require("./one.json"));
const two_json_1 = __importDefault(require("./two.json"));
const three_json_1 = __importDefault(require("./three.json"));
const four_json_1 = __importDefault(require("./four.json"));
const five_json_1 = __importDefault(require("./five.json"));
const six_json_1 = __importDefault(require("./six.json"));
const seven_json_1 = __importDefault(require("./seven.json"));
// additional JSON domains formatted differently
const additionalDomains_json_1 = __importDefault(require("./additionalDomains.json"));
exports.additionalDomains = additionalDomains_json_1.default;
const JSONDomains = [
    one_json_1.default,
    two_json_1.default,
    three_json_1.default,
    four_json_1.default,
    five_json_1.default,
    six_json_1.default,
    seven_json_1.default
];
exports.JSONDomains = JSONDomains;
