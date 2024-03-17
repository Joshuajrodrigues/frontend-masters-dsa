//  * is it ordred ?
//  * half it
//  * check, no then compare
//  * then go left or right
//  * log(n)
//  *

//  *psudo code
//  sort
//  mid = low + [low-hi]/2

//  if v = mid return true

//  if v>mid
//  low = mid+1
//  else if v < mid
//  *hi = mid

//  do while lo< hi

function binarySearch(arr, ele) {
	let low = 0;
	let high = arr.length - 1;

	do {
		const m = Math.floor(low + (high - low) / 2); //halfed

		const v = arr[m];
		if (v === ele) {
			return true;
		}
		if (v > ele) {
			high = m - 1;
		} else {
			low = m + 1;
		}
	} while (low <= high);

	return false;
}

module.exports = binarySearch;
