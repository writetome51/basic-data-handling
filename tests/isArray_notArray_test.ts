import { isArray, notArray } from '../isArray_notArray';


let nonArrayValues = [1, '', undefined, null, false, {}, () => {
}];
let valuesThatAreArrays = [[], [1], ['', 1, false, {}]];
let results = [];


// Test 1:
// This must return false each time to pass:
for (let i = 0; i < nonArrayValues.length; ++i) {
	results.push(isArray(nonArrayValues[i]));
}
if (results.includes(true)) console.log('test 1: failed.');
else console.log('test 1: passed.');



// Test 2:
// This must return true each time to pass:
results = [];
for (let i = 0; i < valuesThatAreArrays.length; ++i) {
	results.push(isArray(valuesThatAreArrays[i]));
}
if (results.includes(false)) console.log('test 2: failed.');
else console.log('test 2: passed.');


// Test 3:
// This must return false each time to pass:
results = [];
for (let i = 0; i < valuesThatAreArrays.length; ++i) {
	results.push(notArray(valuesThatAreArrays[i]));
}
if (results.includes(true)) console.log('test 3: failed.');
else console.log('test 3: passed.');


//Test 4:
// This must return true each time to pass:
results = [];
for (let i = 0; i < valuesThatAreArrays.length; ++i) {
	results.push(notArray(nonArrayValues[i]));
}
if (results.includes(false)) console.log('test 4: failed.');
else console.log('test 4: passed.');
