import { isObject, notObject } from '../isObject_notObject';


if (isObject([])) console.log('test 1 passed');
else console.log('test 1 FAILED');

if (isObject({})) console.log('test 2 passed');
else console.log('test 2 FAILED');

if (notObject(null)) console.log('test 3 passed');
else console.log('test 3 FAILED');

if (notObject('asdf')) console.log('test 4 passed');
else console.log('test 4 FAILED');

if (notObject(10)) console.log('test 5 passed');
else console.log('test 5 FAILED');

if (notObject(true)) console.log('test 6 passed');
else console.log('test 6 FAILED');

if (notObject(undefined)) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Even if string is created using String() constructor, it's
// not considered an object:
let str = String('boo');
if (notObject(str)) console.log('test 8 passed');
else console.log('test 8 FAILED');
