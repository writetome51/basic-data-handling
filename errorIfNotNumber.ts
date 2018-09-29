import {isFiniteNumber} from './isFiniteNumber';

export function errorIfNotNumber(variable): void{
	if (isFiniteNumber(variable))  return;
	
	else throw new Error('Input must be number');
}
