import { errorIfNotInteger } from './errorIfNotInteger';


export function errorIfNotIntegerZeroOrGreater(num) {
	errorIfNotInteger(num);
	if (num < 0) throw new Error('The parameter must be an integer not less than 0');
}