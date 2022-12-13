"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = void 0;
var app_1 = __importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
var firestore_1 = require("firebase/firestore");
var app = app_1.default.initializeApp({
    apiKey: "AIzaSyDgW-LsVhFQ4CUCDTe10uEHL1U808kK5JU",
    authDomain: "babysteps-13f8c.firebaseapp.com",
    projectId: "babysteps-13f8c",
    storageBucket: "babysteps-13f8c.appspot.com",
    messagingSenderId: "621749573096",
    appId: "1:621749573096:web:d879aebabb873f1d30805d"
});
exports.auth = app.auth();
exports.db = (0, firestore_1.getFirestore)(app);
exports.default = app;
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDgW-LsVhFQ4CUCDTe10uEHL1U808kK5JU",
//   authDomain: "babysteps-13f8c.firebaseapp.com",
//   projectId: "babysteps-13f8c",
//   storageBucket: "babysteps-13f8c.appspot.com",
//   messagingSenderId: "621749573096",
//   appId: "1:621749573096:web:d879aebabb873f1d30805d"
// };
// const app = initializeApp(firebaseConfig);
