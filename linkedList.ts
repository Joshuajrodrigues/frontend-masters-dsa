class NodeItem<T> {
	data: T;
	next: NodeItem<T> | null;
	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

export class LinkedList<T> {
	head: NodeItem<T> | null;
	size: number;
	constructor() {
		this.head = null;
		this.size = 0;
	}

	getLength() {
		return this.size;
	}

	addAtIndex(index: number, data: T) {
		if (index > this.size || index < 0) {
			throw new Error("Index error");
		}

		const newNode = new NodeItem(data);

		let current = this.head;
		let previous: NodeItem<T> | null = null;
		let count = 0;

		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			while (count < index) {
				previous = current;
				current = current?.next || null;
				count++;
			}

			newNode.next = current || null;
			if (previous) {
				previous.next = newNode;
			}
		}
		this.size++;
	}
	append(data: T) {
		this.addAtIndex(this.getLength(), data);
	}
	prepend(data: T) {
		this.addAtIndex(0, data);
	}
	print() {
		let result = "";
		let count = 0;
		let current = this.head;
		while (count < this.size) {
			result += `${current?.data} => `;
			current = current?.next || null;
			count++;
		}
		result += "null";
		return result.trim();
	}
}
