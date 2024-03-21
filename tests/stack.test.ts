import { expect, test, describe, beforeEach } from "vitest";
import Stack from "../stack";

describe("Stack", () => {
    let s: Stack<number>;

    beforeEach(() => {
        s = new Stack<number>();
    });

    test("push should add elements to the stack", () => {
        s.push(1);
        s.push(2);
        s.push(3);
        expect(s.length).toBe(3);
    });

    test("peek should return the top element of the stack", () => {
        s.push(1);
        s.push(2);
        s.push(3);
        expect(s.peek()).toBe(3);
        expect(s.length).toBe(3);
    });

    test("pop should remove and return the top element of the stack", () => {
        s.push(1);
        s.push(2);
        s.push(3);
        expect(s.pop()).toBe(3);
        expect(s.length).toBe(2);
        expect(s.peek()).toBe(2);
    });

    test("pop should throw an error when popping from an empty stack", () => {
        expect(() => s.pop()).toThrowError("empty");
    });
});
