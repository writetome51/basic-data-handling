import { checkTypeOf } from './checkTypeOf';


export function errorIfNotString(variable): void {
	checkTypeOf(variable, 'string');
}
