"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkTypeOf_1 = require("../checkTypeOf");
var values = [
    -10000000, '-10000000', 0.0001, '', undefined, function () {
    }, false, true, [1, 2, 3], { prop: 1, prop2: 2 }, [], null
];
var expectedTypes = [
    'number', 'string', 'number', 'string', 'undefined', 'function', 'boolean', 'boolean',
    'object', 'object', 'object', 'object'
];
var typesNotNumber = ['h/[]@#$', '100', true, function () {
    }, [], {}, null, undefined];
var typesNotString = [false, 100, 1.111, null, undefined, [], {}, function () {
    }];
var typesNotBoolean = [1, 1.11, null, undefined, [], {}, function () {
    }, 'lll'];
var typesNotObject = [1, undefined, '', 0.06, function () {
    }, true];
var typesNotFunction = [1, 1.11, null, undefined, [], {}, '12', true, false];
// Test 1: Prove that it can correctly identify all the data types.
// This part must not trigger error:
var errorTriggered = false;
for (var i_1 = 0; i_1 < values.length; ++i_1) {
    try {
        checkTypeOf_1.checkTypeOf(values[i_1], expectedTypes[i_1]);
    }
    catch (e) {
        errorTriggered = true;
    }
}
if (errorTriggered)
    console.log('test 1: FAILED');
else
    console.log('test 1: passed');
// Test 2: Prove it can correctly identify what is NOT a number.
// This part must trigger error for each item in typesNotNumber to pass:
var errorsTriggered = 0, i = -1;
while (++i < typesNotNumber.length) {
    try {
        checkTypeOf_1.checkTypeOf(typesNotNumber[i], 'number');
    }
    catch (e) {
        ++errorsTriggered;
    }
}
if (errorsTriggered === typesNotNumber.length)
    console.log('test 2: passed');
else
    console.log('test 2: FAILED');
//Test 3: Prove it can correctly identify what is NOT a string.
// This part must trigger error for each item in typesNotString to pass:
errorsTriggered = 0;
i = -1;
while (++i < typesNotString.length) {
    try {
        checkTypeOf_1.checkTypeOf(typesNotString[i], 'string');
    }
    catch (e) {
        ++errorsTriggered;
    }
}
if (errorsTriggered === typesNotString.length)
    console.log('test 3: passed');
else
    console.log('test 3: FAILED');
//Test 4: Prove it can correctly identify what is NOT a boolean.
// This part must trigger error for each item in typesNotBoolean to pass:
errorsTriggered = 0;
i = -1;
while (++i < typesNotBoolean.length) {
    try {
        checkTypeOf_1.checkTypeOf(typesNotBoolean[i], 'boolean');
    }
    catch (e) {
        ++errorsTriggered;
    }
}
if (errorsTriggered === typesNotBoolean.length)
    console.log('test 4: passed');
else
    console.log('test 4: FAILED');
//Test 5: Prove it can correctly identify what is NOT an object.
// This part must trigger error for each item in typesNotObject to pass:
errorsTriggered = 0;
i = -1;
while (++i < typesNotObject.length) {
    try {
        checkTypeOf_1.checkTypeOf(typesNotObject[i], 'object');
    }
    catch (e) {
        ++errorsTriggered;
    }
}
if (errorsTriggered === typesNotObject.length)
    console.log('test 5: passed');
else
    console.log('test 5: FAILED');
//Test 6: Prove it can correctly identify what is NOT an function.
// This part must trigger error for each item in typesNotFunction to pass:
errorsTriggered = 0;
i = -1;
while (++i < typesNotFunction.length) {
    try {
        checkTypeOf_1.checkTypeOf(typesNotFunction[i], 'function');
    }
    catch (e) {
        ++errorsTriggered;
    }
}
if (errorsTriggered === typesNotFunction.length)
    console.log('test 6: passed');
else
    console.log('test 6: FAILED');
