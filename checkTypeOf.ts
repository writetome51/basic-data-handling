import { notArray, isArray } from './isArray_notArray';

// Triggers error if type of variable is not expectedType.

// @param expectedType can be one of the specified strings or an array of the
// specified strings if you're allowing variable to be more than one type.
// Remember: typeof null does not return 'null'.  It returns 'object'.

export function checkTypeOf(
	variable,
	expectedType: string[] | 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'
): void {

	let errorMessagePrefix = 'Input must be ';

	if (typeof expectedType === 'string') checkTypeSinglePossibility();
	else if (isArray(expectedType)) checkTypeMultiplePossibilities();


	function checkTypeSinglePossibility() {
		// @ts-ignore
		expectedType = expectedType.toLowerCase();
		if ((isArray(variable) && (expectedType !== 'object' && expectedType !== 'array')) ||
			(notArray(variable) && typeof variable !== expectedType)) {
			throw new Error(errorMessagePrefix + expectedType);
		}
	}


	function checkTypeMultiplePossibilities() {
		for (let i = 0; i < expectedType.length; ++i) {
			// @ts-ignore
			expectedType[i] = expectedType[i].toLowerCase();
		}
		// @ts-ignore
		if ((isArray(variable) &&
			// @ts-ignore
			!(expectedType.includes('object')) && !(expectedType.includes('array'))) ||
			// @ts-ignore
			(notArray(variable) && !(expectedType.includes(typeof variable)))) {
			// @ts-ignore
			expectedType = expectedType.join(' or ');
			throw new Error(errorMessagePrefix + expectedType);
		}
	}
}
