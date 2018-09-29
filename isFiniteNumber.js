"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFiniteNumber(variable) {
    return (typeof variable === 'number' && (variable - variable === 0));
}
exports.isFiniteNumber = isFiniteNumber;
