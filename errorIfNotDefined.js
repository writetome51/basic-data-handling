"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var isDefined_notDefined_1 = require("./isDefined_notDefined");


function errorIfNotDefined(variable) {
	if (isDefined_notDefined_1.notDefined(variable))
		throw new Error('Input must be defined.');
}
exports.errorIfNotDefined = errorIfNotDefined;
