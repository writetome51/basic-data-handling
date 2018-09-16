import { checkTypeOf } from './checkTypeOf';


export function errorIfNotFunction(variable): void {
	checkTypeOf(variable, 'function');
}
