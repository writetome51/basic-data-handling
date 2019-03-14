// Returns true if variable is object, and does not consider null an object.

export function isObject(variable): boolean {
	return !(variable === null || typeof variable !== 'object');
}


// Will return true if variable is null.

export function notObject(variable): boolean {
	return !(isObject(variable));
}
