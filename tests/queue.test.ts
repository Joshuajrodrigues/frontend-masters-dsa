import { expect, test, describe } from "vitest";
import { Queue } from "../queue";


let q = new Queue()

describe("Queue", () => {
    test("enqueue", () => {
        q.enqueue(1)
        q.enqueue(2)
        q.enqueue(3)
    });
    test("deque", () => {
        q.deque()
    });
    test("peek", () => {
        expect(q.peek()).toBe(2)
    })
});
