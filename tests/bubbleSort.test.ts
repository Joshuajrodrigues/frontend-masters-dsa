import { describe, expect, test } from "vitest";
import { bubbleSort } from "../bubbleSort";

describe("bubble sort", () => {
	test("sorts an array of numbers in ascending order", () => {
		const arr = [3, 2, 5, 1, 4];
		const sortedArr = bubbleSort([...arr]);
		expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
	});

	test("does nothing to an already sorted array", () => {
		const arr = [1, 2, 3, 4, 5];
		const sortedArr = bubbleSort([...arr]);
		expect(sortedArr).toEqual(arr);
	});

	test("works with arrays containing duplicate elements", () => {
		const arr = [3, 2, 5, 1, 4, 2];
		const sortedArr = bubbleSort([...arr]);
		expect(sortedArr).toEqual([1, 2, 2, 3, 4, 5]);
	});

	test("works with empty array", () => {
		const arr: number[] = [];
		const sortedArr = bubbleSort([...arr]);
		expect(sortedArr).toEqual([]);
	});
});
