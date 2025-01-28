import express from 'express'
import { oauth2client } from '../utils/googleConfig';
import { google } from 'googleapis';
import jwt from 'jsonwebtoken'
export const userRouter = express.Router();
// userRouter.use('*/',(req,res,next)=>{
//     console.log('in middleware');
//     next();
// })
userRouter.post('/auth',async (req,res)=>{
    try {
        const {code} : any = req.query;
        console.log(code);
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);
        const oauth2 = google.oauth2({ version: 'v2', auth: oauth2client });
        const userInfo = await oauth2.userinfo.get();
        const userData = userInfo.data;
        console.log(userData);
        //check user in database
        //return a jwt token
        const token = jwt.sign(userData,'secret');
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
})
userRouter.get('/',(req,res)=>{
    res.json({
        msg : 'default'
    })
})