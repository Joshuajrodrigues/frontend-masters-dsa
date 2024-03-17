export function bubbleSort(arr: number[]) {
	/**
   *the main condition is
   *xi < xi+1 => sorted
   *
   *hey if the person next to me, are you larder than you ? if yes
   lets swap positions
   * the largest num is at the end in 1st iteration.
   * next iteration runs for 1 element less
   * O(n^2)
   * 
   * let arr = [32,4,2,43,543]
   * 
   * */
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
const arr = [32, 4, 2, 43, 543];
console.log(bubbleSort(arr));
