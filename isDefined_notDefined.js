"use strict";
Object.defineProperty(exports, "__esModule", {value: true});


function notDefined(data) {
	return (data === undefined || data === null);
}
exports.notDefined = notDefined;


// data is considered defined if its value is not undefined or null.

function isDefined(data) {
	return !(notDefined(data));
}
exports.isDefined = isDefined;
