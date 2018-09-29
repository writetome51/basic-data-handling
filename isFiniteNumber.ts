
export function isFiniteNumber(variable): boolean {
	return (typeof variable === 'number'  &&  (variable - variable === 0));
}