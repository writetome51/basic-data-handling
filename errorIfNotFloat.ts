import { isFloat } from './isInteger_isFloat';


export function errorIfNotFloat(variable): void {
	if (!isFloat(variable)) throw new Error('Input must be float.');
}
