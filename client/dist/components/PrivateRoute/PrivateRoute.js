"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateRoute = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("../../contexts/AuthContext");
function PrivateRoute() {
    var currentUser = (0, AuthContext_1.useAuth)().currentUser;
    // return (
    //   <Route
    //     {...rest}
    //     render={(props) => {
    //       return currentUser ? (
    //         <Component {...props} />
    //       ) : (
    //         <Navigate to="/login" />
    //       );
    //     }}
    //   ></Route>
    var navigate = (0, react_router_dom_1.useNavigate)();
    if (!currentUser)
        navigate('/signup');
    // console.log(currentUser);
    return <react_router_dom_1.Outlet />;
}
exports.PrivateRoute = PrivateRoute;
