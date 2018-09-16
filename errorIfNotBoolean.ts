import { checkTypeOf } from './checkTypeOf';


export function errorIfNotBoolean(variable): void{
	checkTypeOf(variable, 'boolean');
}