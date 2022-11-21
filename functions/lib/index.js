"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnAddAdminMessage = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.OnAddAdminMessage = functions.firestore.
    document("Messages/{docID}").onCreate(async (snap, context) => {
    try {
        return snap.ref.set({
            adminMessage: "Welcome to the team! [Bot]"
        }, { merge: true });
    }
    catch (error) {
        console.log("Stuff went down: ", error);
        return Promise.reject(error);
    }
});
//# sourceMappingURL=index.js.map