// Although primitive types do technically include 'undefined', since when do you
// intentionally pass undefined to a function?  We'll use common sense here and not
// allow undefined to be included among allowed primitives.


export function errorIfNotPrimitive(variable): void {
	let primitives = ['number', 'string', 'boolean'];
	// @ts-ignore
	if (!(primitives.includes(typeof variable))) {
		throw new Error('Input must be either a number, string, or boolean');
	}
}
