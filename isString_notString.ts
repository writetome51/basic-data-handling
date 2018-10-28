export function isString(variable): boolean {
	return (typeof variable === 'string');
}


export function notString(variable): boolean {
	return !(isString(variable));
}
