const binarySearch = require("../binarySearch");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
test("binary search", () => {
	expect(binarySearch(arr, 4)).toBe(true);
});
