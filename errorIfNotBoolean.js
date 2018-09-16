"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkTypeOf_1 = require("./checkTypeOf");
function errorIfNotBoolean(variable) {
    checkTypeOf_1.checkTypeOf(variable, 'boolean');
}
exports.errorIfNotBoolean = errorIfNotBoolean;
