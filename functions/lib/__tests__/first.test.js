"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const functions = require("firebase-functions-test");
const admin = require("firebase-admin");
const testEnv = functions({
    projectId: "babysteps-13f8c",
}, "./service-account.json");
const myFunctions = require("../../src");
describe("OnAddAdminMessage", () => {
    let wrapped;
    beforeAll(() => {
        wrapped = testEnv.wrap(myFunctions.OnAddAdminMessage);
    });
    test("should add a message to the messages collection", async () => {
        const path = "Messages/12345654321";
        const snap = await admin.firestore().doc(path).
            create({ sender: "Google team" });
        wrapped(snap);
        // get data
        const after = admin.firestore().doc(path).get();
        expect((await after).exists).toBe(true);
        const dataMessage = (await after).data().adminMessage;
        console.log(dataMessage);
        expect(dataMessage).toBe("Thanks for your message");
    });
});
//# sourceMappingURL=first.test.js.map