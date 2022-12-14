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
var react_1 = __importStar(require("react"));
var Navbar_1 = require("../Navbar/Navbar");
var Timeline_1 = __importDefault(require("../Timeline/Timeline"));
var AuthContext_1 = require("../../contexts/AuthContext");
var CreateStep_1 = require("./../CreateStep/CreateStep");
var AddBaby_1 = require("./../AddBaby/AddBaby");
var firebase_1 = require("../../firebase");
var firestore_1 = require("firebase/firestore");
require("./Dashboard.css");
function Dashboard() {
    var currentUser = (0, AuthContext_1.useAuth)().currentUser;
    console.log(currentUser);
    var userId = currentUser.uid;
    console.log('User ID from dashboard:', currentUser.uid);
    var _a = (0, react_1.useState)(false), showCreate = _a[0], setShowCreate = _a[1];
    var _b = (0, react_1.useState)(false), created = _b[0], setCreated = _b[1];
    var _c = (0, react_1.useState)(), babyName = _c[0], setBabyName = _c[1];
    var _d = (0, react_1.useState)(), babyBirth = _d[0], setBabyBirth = _d[1];
    var babyRef = (0, react_1.useRef)(false);
    function handleCreate() {
        if (showCreate) {
            setShowCreate(false);
        }
        else {
            setShowCreate(true);
        }
    }
    (0, react_1.useEffect)(function () {
        function getData() {
            return __awaiter(this, void 0, void 0, function () {
                var usersRef, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            usersRef = (0, firestore_1.query)((0, firestore_1.collection)(firebase_1.db, 'users'), (0, firestore_1.where)('userId', '==', userId));
                            return [4 /*yield*/, (0, firestore_1.getDocs)(usersRef)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response.docs.map(function (doc) {
                                    return __assign(__assign({}, doc.data()), { id: doc['UserId'] });
                                })];
                    }
                });
            });
        }
        getData()
            .then(function (result) {
            babyRef.current = true;
            setBabyName(result[0].name);
        })
            .catch(function (err) {
            console.log(err);
        });
        getData()
            .then(function (result) { return setBabyBirth(result[0].date); })
            .catch(function (err) { return console.log(err); });
    }, [userId, babyName]);
    return (<div className="main-container">
      {currentUser.uid && babyRef.current ? (<>
          <Navbar_1.Navbar babyName={babyName}/>
          <div className="timeline-container">
            <Timeline_1.default userId={userId} created={created} setCreated={setCreated} babyName={babyName} setBabyName={setBabyName} babyBirth={babyBirth} setBabyBirth={setBabyBirth}/>
            <button className="create-button" onClick={handleCreate}>
              {showCreate ? <h3>x</h3> : <h2>+</h2>}
            </button>
            {showCreate ? (<CreateStep_1.CreateStep setCreated={setCreated} currentUser={currentUser} setShowCreate={setShowCreate}/>) : null}
          </div>
        </>) : (<AddBaby_1.AddBaby babyName={babyName} setBabyName={setBabyName} setBabyBirth={setBabyBirth}/>)}
    </div>);
}
exports.default = Dashboard;
//TIMELINE CONTAIENR DOESN?T EXIST
