import { describe, expect, test } from "vitest";
import { LinkedList } from "../linkedList";

const ll = new LinkedList();
ll.addAtIndex(0, 1);
ll.addAtIndex(1, 2);
describe("linked list", () => {
	test("add at index", () => {
		expect(ll.getLength()).toBe(2);
	});
	test("append", () => {
		ll.append(3);
	});
	test("prepend", () => {
		ll.prepend(4);
	});
	test("print", () => {
		expect(ll.print()).toBe("4 => 1 => 2 => 3 => null");
	});
	test("remove by index", () => {
		expect(ll.removeAt(1)).toBe(1);
	});
});
