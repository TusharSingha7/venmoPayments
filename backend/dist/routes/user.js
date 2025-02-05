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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const googleConfig_1 = require("../utils/googleConfig");
require("../config");
const googleapis_1 = require("googleapis");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dataTypes_1 = require("../types/dataTypes");
const index_1 = __importDefault(require("../razor/index"));
const crypto_1 = __importDefault(require("crypto"));
exports.userRouter = express_1.default.Router();
const secret = process.env.JWTSECRET || "";
// userRouter.use('*/',(req,res,next)=>{
//     console.log('in middleware');
//     next();
// })
exports.userRouter.post('/auth', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.query;
        const googleRes = yield googleConfig_1.oauth2client.getToken(code);
        googleConfig_1.oauth2client.setCredentials(googleRes.tokens);
        const oauth2 = googleapis_1.google.oauth2({ version: 'v2', auth: googleConfig_1.oauth2client });
        const userInfo = yield oauth2.userinfo.get();
        const userData = userInfo.data;
        console.log(userData);
        //check user in database
        //return a jwt token
        const token = jsonwebtoken_1.default.sign(userData, secret);
        res.json({
            token
        });
    }
    catch (err) {
        console.log(err);
        res.status(404).json({
            msg: "failed"
        });
    }
}));
exports.userRouter.get('/verify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_data = req.body;
    console.log('in verify');
    //aplly zod verification here
    try {
        //find user in databse
        const check = dataTypes_1.LoginSchema.parse(user_data);
        if (!check)
            res.status(404).json({ msg: 'failed login' });
        //compare the hashed password with current pass
        const password = check.password;
        const email = check.email;
        //fetch the hashed pass from databse using email
        const cmp = yield bcrypt_1.default.compare(password, 'hashedpassword');
        if (!cmp)
            res.status(404).json({ msg: 'wrong password' });
        //return jwt token
        //use userid from database to create token
        const token = jsonwebtoken_1.default.sign(user_data, secret);
        ;
        res.json({
            token
        });
    }
    catch (err) {
        console.log(err);
        res.status(404).json({
            msg: "failed login"
        });
    }
}));
exports.userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_data = req.body;
    //apply zod veificaton here
    try {
        const check = dataTypes_1.SignupSchema.parse(user_data);
        if (!check)
            res.status(404).json({ msg: 'failed signup' });
        const hashedPass = yield bcrypt_1.default.hash(check.password, 10);
        //add in database
        res.json({
            msg: 'success'
        });
    }
    catch (err) {
        console.log(err);
        res.status(404).json({
            msg: "failed signup"
        });
    }
}));
exports.userRouter.get('/', (req, res) => {
    res.json({
        msg: 'default'
    });
});
exports.userRouter.post('/razorpay-order-create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const amount = req.body.amount;
        const order = yield (0, index_1.default)({ amount });
        res.json({
            order
        });
    }
    catch (err) {
        console.log(err);
        res.status(405).json({
            msg: "failed creating order"
        });
    }
}));
exports.userRouter.post('/verify-payment', (req, res) => {
    console.log(req.body);
    try {
        const razorpaySignature = req.body.razorpay_signature;
        const body = req.body.razorpay_order_id + '|' + req.body.razorpay_payment_id;
        console.log("here");
        const expectedSignature = crypto_1.default
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
            .update(body.toString())
            .digest("hex");
        if (expectedSignature !== razorpaySignature) {
            return res.status(400).json({ error: "Invalid Signature" });
        }
        return res.json({ success: true });
    }
    catch (err) {
        console.log(err);
        return res.status(405).json({
            msg: "failed verifying payment"
        });
    }
});
