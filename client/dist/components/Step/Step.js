"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
var react_1 = __importDefault(require("react"));
require("./Step.css");
function Step(_a) {
    var step = _a.step;
    return (<div className="step-container">
      <img src={step.url} alt="img"/>
      <div className="step-content">
        <h1>{step.title}</h1>
        <p>{step.notes}</p>
      </div>
    </div>);
}
exports.Step = Step;
