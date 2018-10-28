
export function isFiniteNumber(variable): boolean {
	return (typeof variable === 'number'  &&  (variable - variable === 0));
}


export function notFiniteNumber(variable): boolean {
	return !(isFiniteNumber(variable));
}
