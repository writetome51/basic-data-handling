"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkTypeOf_1 = require("./checkTypeOf");
function errorIfNotString(variable) {
    checkTypeOf_1.checkTypeOf(variable, 'string');
}
exports.errorIfNotString = errorIfNotString;
