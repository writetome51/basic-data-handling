"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var isObject_notObject = require("./isObject_notObject");


function errorIfNotObject(variable) {
	if (isObject_notObject.notObject(variable))
		throw new Error('Input must be object');
}
exports.errorIfNotObject = errorIfNotObject;
