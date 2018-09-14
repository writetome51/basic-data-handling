import { checkTypeOf } from '../checkTypeOf';


let values = [
	-10000000, '-10000000', 0.0001, '', undefined, function () {
	}, false, true, [1, 2, 3], {prop: 1, prop2: 2},[], null
];

let expectedTypes = [
	'number','string','number','string','undefined','function','boolean','boolean',
	'array','object', 'object','object'
];

let expectedTypeMultiples = [
	['number','string'],['number','string'],['number','string'],['number','string'],
	['undefined','function'], ['undefined','function'],['boolean','string'],['boolean','string'],
	['array','object'],['array','object'],['array','object'],['array','object']
];

let expectedTypesThatAreWrong = [
	'string','number','string','number','object','object','number',
	'number', 'boolean','array','undefined','undefined'
];

let expectedTypeMultiplesThatAreWrong = [
	['boolean','object'],['boolean','object'],['boolean','object'],['boolean','object'],
	['array','object'], ['undefined','object'],['number','string'],['number','string'],
	['number','boolean'],['number','boolean'],['number','boolean'],['number','boolean']
];



// Test 1:
// This part must not trigger error:
let errorTriggered = false;
for (let i = 0; i < values.length; ++i){
	try{
		checkTypeOf(values[i], expectedTypes[i]);
	}
	catch (e) {
		errorTriggered = true;
	}
}
if (errorTriggered) console.log('test 1: failed.');
else console.log('test 1: passed.');

// Test 2:
// This part must not trigger error:
errorTriggered = false;
for (let i = 0; i < values.length; ++i){
	try{
		checkTypeOf(values[i], expectedTypeMultiples[i]);
	}
	catch (e) {
		errorTriggered = true;
	}
}
if (errorTriggered) console.log('test 2: failed.');
else console.log('test 2: passed.');


//Test 3:
// This part must trigger errors to pass:
errorTriggered = false;
for (let i = 0; i < values.length; ++i){
	try{
		checkTypeOf(values[i], expectedTypesThatAreWrong[i]);
	}
	catch (e) {
		errorTriggered = true;
	}
}
if (errorTriggered) console.log('test 3: passed.');
else console.log('test 3: failed.');


// Test 4:
// This part must trigger errors to pass:
errorTriggered = false;
for (let i = 0; i < values.length; ++i){
	try{
		checkTypeOf(values[i], expectedTypeMultiplesThatAreWrong[i]);
	}
	catch (e) {
		errorTriggered = true;
	}
}
if (errorTriggered) console.log('test 4: passed.');
else console.log('test 4: failed.');