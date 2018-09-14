"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("../isArray_notArray");
var nonArrayValues = [1, '', undefined, null, false, {}, function () {
    }];
var valuesThatAreArrays = [[], [1], ['', 1, false, {}]];
var results = [];
// Test 1:
// This must return false each time to pass:
for (var i = 0; i < nonArrayValues.length; ++i) {
    results.push(isArray_notArray_1.isArray(nonArrayValues[i]));
}
if (results.includes(true))
    console.log('test 1: failed.');
else
    console.log('test 1: passed.');
// Test 2:
// This must return true each time to pass:
results = [];
for (var i = 0; i < valuesThatAreArrays.length; ++i) {
    results.push(isArray_notArray_1.isArray(valuesThatAreArrays[i]));
}
if (results.includes(false))
    console.log('test 2: failed.');
else
    console.log('test 2: passed.');
// Test 3:
// This must return false each time to pass:
results = [];
for (var i = 0; i < valuesThatAreArrays.length; ++i) {
    results.push(isArray_notArray_1.notArray(valuesThatAreArrays[i]));
}
if (results.includes(true))
    console.log('test 3: failed.');
else
    console.log('test 3: passed.');
//Test 4:
// This must return true each time to pass:
results = [];
for (var i = 0; i < valuesThatAreArrays.length; ++i) {
    results.push(isArray_notArray_1.notArray(nonArrayValues[i]));
}
if (results.includes(false))
    console.log('test 4: failed.');
else
    console.log('test 4: passed.');
