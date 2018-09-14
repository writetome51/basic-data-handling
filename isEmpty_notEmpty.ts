export function isEmpty(arrayOrString): boolean {
	return (arrayOrString.length === 0);
}


export function notEmpty(arrayOrString): boolean {
	return !(isEmpty(arrayOrString));
}