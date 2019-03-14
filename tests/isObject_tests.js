"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isObject_notObject_1 = require("../isObject_notObject");
if (isObject_notObject_1.isObject([]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
if (isObject_notObject_1.isObject({}))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
if (isObject_notObject_1.notObject(null))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
if (isObject_notObject_1.notObject('asdf'))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
if (isObject_notObject_1.notObject(10))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
if (isObject_notObject_1.notObject(true))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
if (isObject_notObject_1.notObject(undefined))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Even if string is created using String() constructor, it's
// not considered an object:
var str = String('boo');
if (isObject_notObject_1.notObject(str))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
