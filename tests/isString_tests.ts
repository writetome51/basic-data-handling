import { isString, notString } from '../isString_notString';


let strings = ['', ' ', '	', '\n', '\r', '\\', '\'', '"', '`', '1', '0', '!@#$%^&*()'];
let nonStrings = [true, 1, 0.0001, [8, 9], {}, (i) => (i === 2), false, {prop: 1}, ['hello']];


// Test 1:  This must return true each time to pass:
let results = [];
for (let i = 0; i < strings.length; ++i) {
	results.push(isString(strings[i]));
}
if (results.length === strings.length && !(results.includes(undefined))
	&& !(results.includes(false)) && results.includes(true))
	console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:  This must return false each time to pass:
results = [];
for (let i = 0; i < nonStrings.length; ++i) {
	results.push(isString(nonStrings[i]));
}

if (results.length === nonStrings.length && !(results.includes(undefined))
	&& !(results.includes(true)) && results.includes(false))
	console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3:  This must return true each time to pass:
results = [];
for (let i = 0; i < nonStrings.length; ++i) {
	results.push(notString(nonStrings[i]));
}

if (results.length === nonStrings.length && !(results.includes(undefined))
	&& !(results.includes(false)) && results.includes(true))
	console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4:  This must return false each time to pass:
results = [];
for (let i = 0; i < strings.length; ++i) {
	results.push(notString(strings[i]));
}
if (results.length === strings.length && !(results.includes(undefined))
	&& !(results.includes(true)) && results.includes(false))
	console.log('test 4 passed');
else console.log('test 4 FAILED');
