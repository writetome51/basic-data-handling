// Triggers error if type of variable is not expectedType.

// Remember: typeof null does not return 'null'.  It returns 'object'.

export function checkTypeOf(
	variable,
	expectedType: 'number' | 'boolean' | 'string' | 'object' | 'function' | 'undefined'
): void {

	// @ts-ignore
	expectedType = expectedType.toLowerCase();

	if (typeof variable !== expectedType) throw new Error('Input must be ' + expectedType);
}
