export function notSet(variable): boolean {
	return (variable === undefined || variable === null);
}


// variable is considered set if its value is not undefined or null.

export function isSet(variable): boolean {
	return !(notSet(variable));
}