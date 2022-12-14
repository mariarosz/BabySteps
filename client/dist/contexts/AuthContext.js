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
exports.AuthProvider = exports.useAuth = void 0;
var react_1 = __importStar(require("react"));
var firebase_1 = require("../firebase");
var AuthContext = react_1.default.createContext();
function useAuth() {
    return (0, react_1.useContext)(AuthContext);
}
exports.useAuth = useAuth;
function AuthProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(), currentUser = _b[0], setCurrentUser = _b[1];
    var _c = (0, react_1.useState)(true), loading = _c[0], setLoading = _c[1];
    function signup(email, password) {
        return firebase_1.auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email, password) {
        return firebase_1.auth.signInWithEmailAndPassword(email, password);
    }
    function logout() {
        return firebase_1.auth.signOut();
    }
    (0, react_1.useEffect)(function () {
        var unsubscribe = firebase_1.auth.onAuthStateChanged(function (user) {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    var value = { currentUser: currentUser, signup: signup, login: login, logout: logout };
    return (<AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>);
}
exports.AuthProvider = AuthProvider;
