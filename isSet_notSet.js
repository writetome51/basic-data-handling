"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notSet(variable) {
    return (variable === undefined || variable === null);
}
exports.notSet = notSet;
// variable is considered set if its value is not undefined or null.
function isSet(variable) {
    return !(notSet(variable));
}
exports.isSet = isSet;
