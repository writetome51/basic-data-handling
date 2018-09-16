import { notArray } from './isArray_notArray';


export function isEmpty(arrayOrString): boolean {
	if (typeof arrayOrString !== 'string' && notArray(arrayOrString)){
		throw new Error('Input must be array or string.');
	}
	return (arrayOrString.length === 0);
}


export function notEmpty(arrayOrString): boolean {
	return !(isEmpty(arrayOrString));
}