import { notArray, isArray } from './isArray_notArray';


export function checkTypeOf(
	variable,
	expectedType: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'): void {

	let errorMessagePrefix = 'Input must be ';
	// @ts-ignore
	expectedType = expectedType.toLowerCase();

	if ((isArray(variable) && (expectedType !== 'object' && expectedType !== 'array')) ||
		(notArray(variable) && typeof variable !== expectedType)) {
		throw new Error(errorMessagePrefix + expectedType);
	}
}
