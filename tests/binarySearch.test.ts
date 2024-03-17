import { expect, test, describe } from "vitest";
import { binarySearch } from "../binarySearch";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arrmix = [11, 2, 33, 4, 54, 6, 75, 8];
describe("Binary search", () => {
	test("with sorted array", () => {
		expect(binarySearch(arr, 4)).toBe(true);
	});

	test(" with unsorted array", () => {
		expect(binarySearch(arrmix, 11)).toBe(true);
	});

	test("should work with arrays of different lengths", () => {
		expect(binarySearch([], 1)).toBe(false); // empty array
		expect(binarySearch([1], 1)).toBe(true); // single-element array
		expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(true); // target in the middle
		expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(true); // target at the beginning
		expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(true); // target at the end
	});
});
