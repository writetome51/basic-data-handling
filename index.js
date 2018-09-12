"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

// Resolve by including node_modules eventually:
var is_not_array_1 = require("../arrays/no_modify/return_boolean/is_not_array");


function isEmpty(arrayOrString) { // return boolean.
	return (arrayOrString.length === 0);
}
exports.isEmpty = isEmpty;


function notEmpty(arrayOrString) { // return boolean.
	return !(isEmpty(arrayOrString));
}
exports.notEmpty = notEmpty;


// @params  variable: any,  expectedType: string
function checkTypeOf(variable, expectedType) { // returns void.
	var errorMessagePrefix = 'Input must be ';

	expectedType = expectedType.toLowerCase();
	if ((is_not_array_1.isArray(variable) && (expectedType !== 'object' && expectedType !== 'array')) ||
		(is_not_array_1.notArray(variable) && typeof variable !== expectedType)) {
		throw new Error(errorMessagePrefix + expectedType);
	}
}
exports.checkTypeOf = checkTypeOf;
