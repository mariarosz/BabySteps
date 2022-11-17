"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirmation = void 0;
var react_1 = __importDefault(require("react"));
require("./Confirmation.css");
function Confirmation(_a) {
    var babyName = _a.babyName;
    return (<div className="centralised-content-container">
      <div id="content-box">
        <h3>Dear {babyName},</h3>
        <p>
        <span id="text">
          It's lovely that we can accompany you on this great journey, in your
          discoveries and achievements.
        </span>
        </p>

        <p>Enjoy every little step of your way!</p>
      </div>
    </div>);
}
exports.Confirmation = Confirmation;
