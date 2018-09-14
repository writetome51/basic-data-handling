
export function isArray(data): boolean {
	return (Array.isArray(data));
}


export function notArray(data): boolean {
	return !(isArray(data));
}
