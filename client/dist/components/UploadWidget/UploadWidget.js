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
var react_1 = __importStar(require("react"));
var hi_1 = require("react-icons/hi");
function UploadWidget(_a) {
    var url = _a.url, setUrl = _a.setUrl;
    var cloudinaryRef = (0, react_1.useRef)();
    var widgetRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dbhikwtx2',
            uploadPreset: 'k14x58cy',
        }, function (error, result) {
            if (!error && result && result.event === 'success') {
                setUrl(result.info.url);
            }
        });
    }, [setUrl]);
    return (<button id="upload" type="button" onClick={function () { return widgetRef.current.open(); }}>
      {url ? <hi_1.HiCheck /> : 'Upload picture'}
    </button>);
}
exports.default = UploadWidget;
