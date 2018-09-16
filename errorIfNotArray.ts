import { notArray } from './isArray_notArray';


export function errorIfNotArray(variable): void {
	if (notArray(variable)) throw new Error('Input must be array.');
}
