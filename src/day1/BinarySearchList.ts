export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        let guess = Math.floor(low + (high - low) / 2);

        if (haystack[guess] === needle) {
            return true;
        } else if (haystack[guess] > needle) {
            high = guess - 1;
        } else {
            low = guess  + 1;
        }
    }

    return false;
}