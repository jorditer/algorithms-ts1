export default function linear_search(haystack: number[], needle: number): boolean {
	for (let number of haystack) {
		if (number == needle) {
			return true;
		}
	}
	return false;
}