export const isArray = Array.isArray;


export function notArray(data): boolean {
	return !(isArray(data));
}
