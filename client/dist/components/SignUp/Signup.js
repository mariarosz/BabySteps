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
var AuthContext_1 = require("../../contexts/AuthContext");
var react_router_dom_1 = require("react-router-dom");
var step_img_placeholder2_webp_1 = __importDefault(require("../../assets/img/step_img_placeholder2.webp"));
require("./Signup.css");
function Signup() {
    var emailRef = (0, react_1.useRef)();
    var passwordRef = (0, react_1.useRef)();
    var passwordConfRef = (0, react_1.useRef)();
    var signup = (0, AuthContext_1.useAuth)().signup;
    var _a = (0, react_1.useState)(''), error = _a[0], setError = _a[1];
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (passwordRef.current.value !== passwordConfRef.current.value) {
                            return [2 /*return*/, setError('Passwords do not match.')];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        setError('');
                        setLoading(true);
                        return [4 /*yield*/, signup(emailRef.current.value, passwordRef.current.value)];
                    case 2:
                        _a.sent();
                        navigate('/');
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        setError(error_1.message);
                        return [3 /*break*/, 4];
                    case 4:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (<div className="signup-container">
      <div className="logo-panel">
        <h1 id="logo">BabySteps</h1>
      </div>
      <div className="signup-content">
        <div className="baby-steps-info">
          <h3 id="hero">Your Baby development journal</h3>
          <div className="step-container">
            <img id="signup-img" src={step_img_placeholder2_webp_1.default} alt="img"/>
            <div className="step-content">
              <h1>First self-eaten meal</h1>
            </div>
          </div>
        </div>
        <div className="signup">
          <h1>Signup</h1>
          {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" ref={emailRef} required/>
            <label>Password</label>
            <input type="password" ref={passwordRef} required minLength="8"/>
            <label>Password Confirmation</label>
            <input type="password" ref={passwordConfRef} required/>
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
          <div>
            <p id="link">
              Already have an account? <react_router_dom_1.Link to="/login">Log in.</react_router_dom_1.Link>
            </p>
          </div>
        </div>
      </div>
    </div>);
}
exports.default = Signup;
