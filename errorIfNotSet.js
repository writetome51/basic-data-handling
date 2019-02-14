"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isSet_notSet_1 = require("./isSet_notSet");
function errorIfNotSet(variable) {
    if (isSet_notSet_1.notSet(variable))
        throw new Error('Input must be defined.');
}
exports.errorIfNotSet = errorIfNotSet;
