/**
 *  insert is O(1)
 *  insert at end is O(n)
 *  delete at end is O(n)
 *  delete is o(1)
 *  access is O(n)
 *
 * api
 *
 * get
 * insertAt
 * removeItem
 * removeAt
 * append
 * prepend
 * getLength
 */

class NodeItem {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	getLength() {
		return this.length;
	}

	append(data) {
		const newNodeItem = new NodeItem(data);
		if (!this.head) {
			this.head = newNodeItem;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNodeItem;
		}
		this.length += 1;
	}

	print() {
		let current = this.head;
		let result = "";
		while (current) {
			result += `${current.data} -> `;
			current = current.next;
		}
		result += "null";
		console.log(result);
	}

	get(index) {
		if (index >= this.length || index < 0) {
			throw new Error("BAKAAA");
		}
		let current = this.head;

		let i = 0;

		while (i < index) {
			current = current.next;
			i++;
		}
		return current.data;
	}
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();

console.log("second element is by 0 index", list.get(2));
