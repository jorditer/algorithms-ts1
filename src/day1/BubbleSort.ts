export default function bubble_sort(arr: number[]): void {
	let i = 0;
	let temp;
	let len = arr.length;
	for(; i < len; i++)
	{
		for (let j = 0; j < len - 1 - i; j++) // -i as each iteration locks the last num position 
		{
			if (arr[j] > arr[j + 1]){
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}