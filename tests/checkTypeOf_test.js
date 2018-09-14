"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkTypeOf_1 = require("../checkTypeOf");
var values = [
    -10000000, '-10000000', 0.0001, '', undefined, function () {
    }, false, true, [1, 2, 3], { prop: 1, prop2: 2 }, [], null
];
var expectedTypes = [
    'number', 'string', 'number', 'string', 'undefined', 'function', 'boolean', 'boolean',
    'array', 'object', 'object', 'object'
];
var expectedTypeMultiples = [
    ['number', 'string'], ['number', 'string'], ['number', 'string'], ['number', 'string'],
    ['undefined', 'function'], ['undefined', 'function'], ['boolean', 'string'], ['boolean', 'string'],
    ['array', 'object'], ['array', 'object'], ['array', 'object'], ['array', 'object']
];
var expectedTypesThatAreWrong = [
    'string', 'number', 'string', 'number', 'object', 'object', 'number',
    'number', 'boolean', 'array', 'undefined', 'undefined'
];
var expectedTypeMultiplesThatAreWrong = [
    ['boolean', 'object'], ['boolean', 'object'], ['boolean', 'object'], ['boolean', 'object'],
    ['array', 'object'], ['undefined', 'object'], ['number', 'string'], ['number', 'string'],
    ['number', 'boolean'], ['number', 'boolean'], ['number', 'boolean'], ['number', 'boolean']
];
// Test 1:
// This part must not trigger error:
var errorTriggered = false;
for (var i = 0; i < values.length; ++i) {
    try {
        checkTypeOf_1.checkTypeOf(values[i], expectedTypes[i]);
    }
    catch (e) {
        errorTriggered = true;
    }
}
if (errorTriggered)
    console.log('test 1: failed.');
else
    console.log('test 1: passed.');
// Test 2:
// This part must not trigger error:
errorTriggered = false;
for (var i = 0; i < values.length; ++i) {
    try {
        checkTypeOf_1.checkTypeOf(values[i], expectedTypeMultiples[i]);
    }
    catch (e) {
        errorTriggered = true;
    }
}
if (errorTriggered)
    console.log('test 2: failed.');
else
    console.log('test 2: passed.');
//Test 3:
// This part must trigger errors to pass:
errorTriggered = false;
for (var i = 0; i < values.length; ++i) {
    try {
        checkTypeOf_1.checkTypeOf(values[i], expectedTypesThatAreWrong[i]);
    }
    catch (e) {
        errorTriggered = true;
    }
}
if (errorTriggered)
    console.log('test 3: passed.');
else
    console.log('test 3: failed.');
// Test 4:
// This part must trigger errors to pass:
errorTriggered = false;
for (var i = 0; i < values.length; ++i) {
    try {
        checkTypeOf_1.checkTypeOf(values[i], expectedTypeMultiplesThatAreWrong[i]);
    }
    catch (e) {
        errorTriggered = true;
    }
}
if (errorTriggered)
    console.log('test 4: passed.');
else
    console.log('test 4: failed.');
