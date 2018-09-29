import {isFiniteNumber} from './isFiniteNumber';


// if data has a .0 at the end (i.e, 1.0), this returns true.
export function isInteger(data): boolean {
	return (isFiniteNumber(data) && Number.isInteger(data)); // no errors.
}


// if data has a .0 at the end (i.e, 1.0), this returns false.
export function notInteger(data): boolean {
	return (!isInteger(data));
}


// if data has a .0 at the end (i.e, 1.0), this returns false.
export function isFloat(data): boolean {
	return (notInteger(data) && typeof data === 'number');
}
