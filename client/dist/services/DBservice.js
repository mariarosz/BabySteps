"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBService = void 0;
//import { doc, setDoc } from 'firebase/firestore';
var firebase_1 = require("../firebase");
var firestore_1 = require("firebase/firestore");
var AuthContext_1 = require("../contexts/AuthContext");
function DBService() {
    var currentUser = (0, AuthContext_1.useAuth)().currentUser;
    var userId = currentUser.uid;
    console.log(userId);
    var stepsRef = (0, firestore_1.query)((0, firestore_1.collection)(firebase_1.db, 'steps'), (0, firestore_1.where)('userId', '==', userId));
    return (0, firestore_1.getDocs)(stepsRef).then(function (response) { return response.docs; });
}
exports.DBService = DBService;
//module.exports = { DBService };
