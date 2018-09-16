import { notInteger } from './isInteger_isFloat';


export function errorIfNotInteger(variable): void {
	if (notInteger(variable)) throw new Error('Input must be integer');
}
