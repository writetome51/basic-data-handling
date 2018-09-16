import { checkTypeOf } from './checkTypeOf';


export function errorIfNotNumber(variable): void{
	checkTypeOf(variable, 'number');
}