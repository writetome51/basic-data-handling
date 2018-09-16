import { checkTypeOf } from './checkTypeOf';


export function errorIfNotObject(variable): void {
	checkTypeOf(variable, 'object');
}
