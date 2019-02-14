import { notSet } from './isSet_notSet';


export function errorIfNotSet(variable): void {
	if (notSet(variable)) throw new Error('Input must be defined.');
}
