"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var firebase_1 = require("../../firebase");
var firestore_1 = require("firebase/firestore");
var Confirmation_tsx_1 = require("../Confirmation/Confirmation.tsx");
var Budle_tsx_1 = require("../Budle/Budle.tsx");
var addAgeToStep_1 = require("../../utils/addAgeToStep");
function Timeline(_a) {
    var userId = _a.userId, created = _a.created, setCreated = _a.setCreated, babyName = _a.babyName, babyBirth = _a.babyBirth, setBabyName = _a.setBabyName, setBabyBirth = _a.setBabyBirth;
    var _b = (0, react_2.useState)([]), steps = _b[0], setSteps = _b[1];
    (0, react_2.useEffect)(function () {
        function getData() {
            return __awaiter(this, void 0, void 0, function () {
                var stepsRef, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            stepsRef = (0, firestore_1.query)((0, firestore_1.collection)(firebase_1.db, 'steps'), (0, firestore_1.where)('userId', '==', userId));
                            return [4 /*yield*/, (0, firestore_1.getDocs)(stepsRef)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response.docs.map(function (doc) {
                                    return __assign(__assign({}, doc.data()), { id: doc.UserId });
                                })];
                    }
                });
            });
        }
        setCreated(false);
        getData()
            .then(function (result) { return setSteps((0, addAgeToStep_1.addAges)(result, babyBirth)); })
            .then(function () { return console.log('im being run again on timeline'); });
    }, [userId, created, setCreated, babyBirth]);
    var budles = [];
    var _loop_1 = function (i) {
        if (budles.findIndex(function (budle) { return budle.age === steps[i].age; }) >= 0) {
            var index = budles.findIndex(function (budle) { return budle.age === steps[i].age; });
            budles[index].steps.push(steps[i]);
        }
        else {
            var newStep = { age: steps[i].age, steps: [] };
            newStep.steps.push(steps[i]);
            budles.push(newStep);
        }
    };
    for (var i = 0; i < steps.length; i++) {
        _loop_1(i);
    }
    budles.sort(function (a, b) { return a.age - b.age; });
    return (<>
      {steps.length === 0 ? (<Confirmation_tsx_1.Confirmation babyName={babyName}/>) : (budles.map(function (budle, index) { return <Budle_tsx_1.Budle budle={budle} key={index}/>; }))}
    </>);
}
exports.default = Timeline;
