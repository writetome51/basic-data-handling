"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isArray(data) {
    return (Array.isArray(data));
}
exports.isArray = isArray;
function notArray(data) {
    return !(isArray(data));
}
exports.notArray = notArray;
