"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupSchema = exports.LoginSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.LoginSchema = zod_1.default.object({
    email: zod_1.default.string().email().min(3, 'Email is too short'),
    password: zod_1.default.string(),
});
exports.SignupSchema = zod_1.default.object({
    username: zod_1.default.string().min(3, 'Username is too short'),
    email: zod_1.default.string().email().min(3, 'Email is too short'),
    password: zod_1.default.string(),
});
