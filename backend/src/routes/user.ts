import express from 'express'
import { Request,Response } from 'express';
import { oauth2client } from '../utils/googleConfig';
import '../config'
import { google } from 'googleapis';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { LoginSchema,SignupSchema } from '../types/dataTypes';
import createOrder from '../razor/index';
import crypto from 'crypto';
export const userRouter = express.Router();
const secret = process.env.JWTSECRET || "";
// userRouter.use('*/',(req,res,next)=>{
//     console.log('in middleware');
//     next();
// })
userRouter.post('/auth',async (req,res)=>{
    try {
        const {code} : any = req.query;
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);
        const oauth2 = google.oauth2({ version: 'v2', auth: oauth2client });
        const userInfo = await oauth2.userinfo.get();
        const userData = userInfo.data;
        console.log(userData);
        //check user in database
        //return a jwt token
        const token = jwt.sign(userData,secret);
        res.json({
            token
        })
    }
    catch(err) {
        console.log(err);
        res.status(404).json({
            msg : "failed"
        })
    }
});
userRouter.get('/verify',async (req,res)=>{
    const user_data = req.body;
    console.log('in verify');
    //aplly zod verification here
    try {
        //find user in databse
        const check = LoginSchema.parse(user_data);
        if(!check) res.status(404).json({msg : 'failed login'});
        //compare the hashed password with current pass
        const password = check.password;
        const email = check.email;
        //fetch the hashed pass from databse using email
        const cmp = await bcrypt.compare(password,'hashedpassword');
        if(!cmp) res.status(404).json({msg : 'wrong password'});
        //return jwt token
        //use userid from database to create token
        const token = jwt.sign(user_data,secret);;
        res.json({
            token
        })
    }
    catch(err) {
        console.log(err);
        res.status(404).json({
            msg : "failed login"
        })
    }
});
userRouter.post('/signup',async (req,res)=>{
    const user_data = req.body;
    //apply zod veificaton here
    try {
        const check = SignupSchema.parse(user_data);
        if(!check) res.status(404).json({msg : 'failed signup'});
        const hashedPass = await bcrypt.hash(check.password,10);
        //add in database
        res.json({
            msg : 'success'
        })
    }
    catch(err) {
        console.log(err);
        res.status(404).json({
            msg : "failed signup"
        })
    }
})
userRouter.get('/',(req,res)=>{
    res.json({
        msg : 'default'
    })
});
userRouter.post('/razorpay-order-create',async (req,res)=>{
    try {
        const amount = req.body.amount;
        const order = await createOrder({amount});
        res.json({
            order
        })
    }
    catch(err) {
        console.log(err);
        res.status(405).json({
            msg : "failed creating order"
        })
    }
});

userRouter.post('/verify-payment', (req: Request, res: Response) : any => {
    console.log(req.body);
    try {
      const razorpaySignature = req.body.razorpay_signature;
      const body = req.body.razorpay_order_id + '|' + req.body.razorpay_payment_id;
      console.log("here");
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
        .update(body.toString())
        .digest("hex");
  
      if (expectedSignature !== razorpaySignature) {
        return res.status(400).json({ error: "Invalid Signature" });
      }

      return res.json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(405).json({
        msg: "failed verifying payment"
      });
    }
  });
  