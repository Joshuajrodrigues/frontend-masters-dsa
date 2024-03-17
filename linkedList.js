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
	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current.data;
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
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();
