"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBaby = void 0;
var react_1 = __importStar(require("react"));
var AuthContext_1 = require("../../contexts/AuthContext");
var firebase_1 = require("../../firebase");
var firestore_1 = require("firebase/firestore");
var Confirmation_1 = require("../Confirmation/Confirmation");
require("./AddBaby.css");
function AddBaby(_a) {
    var babyName = _a.babyName, setBabyName = _a.setBabyName, setBabyBirth = _a.setBabyBirth;
    var currentUser = (0, AuthContext_1.useAuth)().currentUser;
    var _b = (0, react_1.useState)(false), confirmation = _b[0], setConfirmation = _b[1];
    var usersRef = (0, firestore_1.collection)(firebase_1.db, 'users');
    var handleSubmit = function (event) {
        event.preventDefault();
        var userId = currentUser.uid;
        var name = event.target.name.value;
        setBabyName(name);
        var date = event.target.date.value;
        setBabyBirth(date);
        (0, firestore_1.addDoc)(usersRef, {
            name: name,
            date: date,
            userId: userId,
        })
            .then(function () {
            console.log('data added:', name, date);
        })
            .catch(function (error) {
            console.log(error);
        });
        setConfirmation(true);
        event.target.reset();
    };
    return (<div>
      {confirmation ? (<Confirmation_1.Confirmation babyName={babyName}/>) : (<div className="centralised-content-container baby">
          <div id="content-box-baby">
            <h1>Who's The Little One?</h1>
            <form onSubmit={handleSubmit}>
              <label>baby's Name</label>
              <input type="text" name="name" placeholder=""/>
              <label>Baby's date of Birth</label>
              <input type="date" name="date"/>
              <button type="submit">ADD</button>
            </form>
          </div>
        </div>)}
    </div>);
}
exports.AddBaby = AddBaby;
