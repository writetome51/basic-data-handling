"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkTypeOf_1 = require("./checkTypeOf");
function errorIfNotFunction(variable) {
    checkTypeOf_1.checkTypeOf(variable, 'function');
}
exports.errorIfNotFunction = errorIfNotFunction;
