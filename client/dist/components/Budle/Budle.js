"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budle = void 0;
var react_1 = __importDefault(require("react"));
var Step_1 = require("../Step/Step");
require("./Budle.css");
function Budle(_a) {
    var budle = _a.budle;
    function calculateAgeForHeading(age) {
        if (age === 1) {
            return '1st month';
        }
        else if (age === 2) {
            return '2nd month';
        }
        else if (age === 3) {
            return '3rd month';
        }
        else if (age < 12) {
            return "".concat(age, "th month");
        }
        else if (age >= 12) {
            var years = Math.floor(age / 12);
            if (years === 1) {
                return '1 year';
            }
            else {
                return "".concat(years, " years");
            }
        }
    }
    return (<div className="budle-container">
      <div className="budle-heading">
        <h3>{calculateAgeForHeading(budle.age)}</h3>
      </div>
      {budle.steps.map(function (step, index) { return (<Step_1.Step step={step} key={index}/>); })}
    </div>);
}
exports.Budle = Budle;
