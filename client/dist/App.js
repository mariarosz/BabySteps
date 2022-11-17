"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var Signup_1 = __importDefault(require("./components/SignUp/Signup"));
var Dashboard_1 = __importDefault(require("./components/Dashboard/Dashboard"));
var Login_1 = __importDefault(require("./components/Login/Login"));
var AuthContext_1 = require("./contexts/AuthContext");
var react_router_dom_1 = require("react-router-dom");
// import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <AuthContext_1.AuthProvider>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/signup" element={<Signup_1.default />}/>
          <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <react_router_dom_1.Route path="/" element={<Dashboard_1.default />}/>
          {/* </Route> */}
        </react_router_dom_1.Routes>
      </AuthContext_1.AuthProvider>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
