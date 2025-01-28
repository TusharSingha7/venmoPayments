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
const googleapis_1 = require("googleapis");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.userRouter = express_1.default.Router();
// userRouter.use('*/',(req,res,next)=>{
//     console.log('in middleware');
//     next();
// })
exports.userRouter.post('/auth', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.query;
        console.log(code);
        const googleRes = yield googleConfig_1.oauth2client.getToken(code);
        googleConfig_1.oauth2client.setCredentials(googleRes.tokens);
        const oauth2 = googleapis_1.google.oauth2({ version: 'v2', auth: googleConfig_1.oauth2client });
        const userInfo = yield oauth2.userinfo.get();
        const userData = userInfo.data;
        console.log(userData);
        //check user in database
        //return a jwt token
        const token = jsonwebtoken_1.default.sign(userData, 'secret');
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
exports.userRouter.get('/', (req, res) => {
    res.json({
        msg: 'default'
    });
});
