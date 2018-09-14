"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_notEmpty_1 = require("../isEmpty_notEmpty");
// Test 1:
if (isEmpty_notEmpty_1.isEmpty(''))
    console.log('test 1: passed.');
else
    console.log('test 1: failed.');
// Test 2:
if (isEmpty_notEmpty_1.isEmpty('   '))
    console.log('test 2: failed.');
else
    console.log('test 2: passed.');
// Test 3:
if (isEmpty_notEmpty_1.isEmpty([]))
    console.log('test 3: passed.');
else
    console.log('test 3: failed.');
// Test 4:
if (isEmpty_notEmpty_1.isEmpty([0]))
    console.log('test 4: failed.');
else
    console.log('test 4: passed.');
// Test 5:
if (isEmpty_notEmpty_1.notEmpty([0]))
    console.log('test 5: passed.');
else
    console.log('test 5: failed.');
// Test 6:
if (isEmpty_notEmpty_1.notEmpty([]))
    console.log('test 6: failed.');
else
    console.log('test 6: passed.');
// Test 7:
if (isEmpty_notEmpty_1.notEmpty(''))
    console.log('test 7: failed.');
else
    console.log('test 7: passed.');
// Test 8:
if (isEmpty_notEmpty_1.notEmpty('  '))
    console.log('test 8: passed.');
else
    console.log('test 8: failed.');
// Test 9:
// If error is triggered, it passes:
var errorTriggered = false;
try {
    isEmpty_notEmpty_1.notEmpty({ prop: 1 });
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9: passed.');
else
    console.log('test 9: failed.');
