import { isEmpty, notEmpty } from '../isEmpty_notEmpty';


// Test 1:
if (isEmpty('')) console.log('test 1: passed.');
else console.log('test 1: failed.');

// Test 2:
if (isEmpty('   ')) console.log('test 2: failed.');
else console.log('test 2: passed.');

// Test 3:
if (isEmpty([])) console.log('test 3: passed.');
else console.log('test 3: failed.');

// Test 4:
if (isEmpty([0])) console.log('test 4: failed.');
else console.log('test 4: passed.');

// Test 5:
if (notEmpty([0])) console.log('test 5: passed.');
else console.log('test 5: failed.');

// Test 6:
if (notEmpty([])) console.log('test 6: failed.');
else console.log('test 6: passed.');

// Test 7:
if (notEmpty('')) console.log('test 7: failed.');
else console.log('test 7: passed.');

// Test 8:
if (notEmpty('  ')) console.log('test 8: passed.');
else console.log('test 8: failed.');

// Test 9:
// If error is triggered, it passes:
let errorTriggered = false;
try{
	notEmpty({prop:1});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9: passed.');
else console.log('test 9: failed.');


// Test 10:
// If error is triggered, it passes:
errorTriggered = false;
try{
	notEmpty();
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10: passed.');
else console.log('test 10: failed.');


// Test 11:
// If error is triggered, it passes:
errorTriggered = false;
try{
	notEmpty(0);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 11: passed.');
else console.log('test 11: failed.');