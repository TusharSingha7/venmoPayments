"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth2client = void 0;
const googleapis_1 = require("googleapis");
require("../config");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
exports.oauth2client = new googleapis_1.google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, 'postmessage');
