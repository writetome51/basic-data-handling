"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInteger_isFloat_1 = require("../isInteger_isFloat");
var nonIntegers = [1.01, 0.001, '1', '0.001', true, [], {}, null];
var integers = [1.0, 1, 1000, 0.0];
var floats = [1.01, 0.001, 100.2];
var nonFloats = ['0.01', true, [], {}, null];
var results = [];
// Test 1:
// Must return false every time to pass.
for (var i = 0; i < nonIntegers.length; ++i) {
    results.push(isInteger_isFloat_1.isInteger(nonIntegers[i]));
}
if (results.includes(true))
    console.log('test 1: failed.');
else
    console.log('test 1: passed.');
//Test 2:
// Must return true every time to pass.
results = [];
for (var i = 0; i < integers.length; ++i) {
    results.push(isInteger_isFloat_1.isInteger(integers[i]));
}
if (results.includes(false))
    console.log('test 2: failed.');
else
    console.log('test 2: passed.');
//Test 3:
// Must return true every time to pass.
results = [];
for (var i = 0; i < nonIntegers.length; ++i) {
    results.push(isInteger_isFloat_1.notInteger(nonIntegers[i]));
}
if (results.includes(false))
    console.log('test 3: failed.');
else
    console.log('test 3: passed.');
//Test 4:
// Must return false every time to pass.
results = [];
for (var i = 0; i < integers.length; ++i) {
    results.push(isInteger_isFloat_1.notInteger(integers[i]));
}
if (results.includes(true))
    console.log('test 4: failed.');
else
    console.log('test 4: passed.');
//Test 5:
// Must return false every time to pass.
results = [];
for (var i = 0; i < nonFloats.length; ++i) {
    results.push(isInteger_isFloat_1.isFloat(nonFloats[i]));
}
if (results.includes(undefined))
    console.log('test 5: failed');
if (results.length === nonFloats.length &&
    results.includes(true))
    console.log('test 5: failed.');
else
    console.log('test 5: passed.');
//Test 6:
// Must return true every time to pass.
results = [];
for (var i = 0; i < floats.length; ++i) {
    results.push(isInteger_isFloat_1.isFloat(floats[i]));
}
if (results.includes(undefined))
    console.log('test 6: failed');
if (results.includes(false))
    console.log('test 6: failed.');
else
    console.log('test 6: passed.');
