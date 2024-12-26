//Basically an array of booleans that changes to true at some point
// The normal answer is to go to the half and if it breaks go from 0 to the half, or go from the half to the end if it doesn't, that is N/2 which is still O(N) complexity
// Yet the correct answer is to use Square root of N which is 

export default function two_crystal_balls(breaks: boolean[]): number {
	let amount = Math.floor(Math.sqrt(breaks.length));

	let i = amount;
	let len = breaks.length
	for (; i < len; i += amount)
	{
		if (breaks[i])
			break;
	}
	i -= amount;
	for (let j = 0; i < len && j < amount; i++, j++) {
		if (breaks[i])
			return i;
	}

	return -1;
}