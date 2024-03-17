import { describe, expect, it } from "vitest";
import { linearSearch } from "../linearSearch";

describe("Linear search", () => {
	it("return true if found", () => {
		expect(linearSearch([3, 4, 5, 2, 0, 7, 8, 9], 8)).toBe(true);
	});

	it("should return false if the target is not found", () => {
		expect(linearSearch([3, 4, 5, 2, 0, 7, 8, 9], 10)).toBe(false);
	});

	it("should work with arrays of different lengths", () => {
		expect(linearSearch([], 1)).toBe(false); // empty array
		expect(linearSearch([1], 1)).toBe(true); // single-element array
		expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(true); // target in the middle
		expect(linearSearch([1, 2, 3, 4, 5], 1)).toBe(true); // target at the beginning
		expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(true); // target at the end
	});

	it("should work with arrays containing duplicate elements", () => {
		expect(linearSearch([1, 2, 2, 3, 4, 5], 2)).toBe(true); // duplicate elements
	});
});
