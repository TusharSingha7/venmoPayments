"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createOrder;
const razorpay_1 = __importDefault(require("razorpay"));
require("../config");
var instance = new razorpay_1.default({
    key_id: process.env.RAZORPAY_KEY_ID || "",
    key_secret: process.env.RAZORPAY_KEY_SECRET || ""
});
function createOrder(_a) {
    return __awaiter(this, arguments, void 0, function* ({ amount }) {
        try {
            const order = yield instance.orders.create({
                amount: amount * 100,
                currency: "INR",
                receipt: "receipt#1",
                notes: {
                    key1: "value3",
                    key2: "value2"
                }
            });
            return order;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
