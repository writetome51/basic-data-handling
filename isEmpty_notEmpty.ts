import { checkTypeOf } from './checkTypeOf';


export function isEmpty(arrayOrString): boolean {
	checkTypeOf(arrayOrString, ['array', 'string']);
	return (arrayOrString.length === 0);
}


export function notEmpty(arrayOrString): boolean {
	return !(isEmpty(arrayOrString));
}