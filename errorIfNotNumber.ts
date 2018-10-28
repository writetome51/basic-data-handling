import { notFiniteNumber } from './isFiniteNumber';


export function errorIfNotNumber(variable): void {
	if (notFiniteNumber(variable)) throw new Error('Input must be a finite number');
}
