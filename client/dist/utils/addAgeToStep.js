"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAges = void 0;
var date_fns_1 = require("date-fns");
function addAges(steps, babyBirth) {
    function calculateAge(birth, event) {
        var result = (0, date_fns_1.differenceInMonths)(new Date(event), new Date(birth));
        return (result = result + 1);
    }
    steps.forEach(function (step) { return (step.age = calculateAge(babyBirth, step.date)); });
    return steps;
}
exports.addAges = addAges;
