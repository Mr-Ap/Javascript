class Node {
	constructor(value) {
		this.data = value || null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	isEmpty() {
		return this.size === 0;
	}
	count() {
		return this.size;
	}

	insertAtFront(value) {
		let node = new Node(value);
		if (this.isEmpty()) this.head = node;
		else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
		return;
	}

	insertAtEnd(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
			this.head = node;
			this.size++;
			return;
		}
		let temp = this.head;
		while (temp.next) temp = temp.next;
		temp.next = node;
		this.size++;
		return;
	}

	insertAtPosition(value, position) {
		if (position < 1 || position > this.size + 1) {
			console.log('Invalid Postion!');
			return;
		}
		if (position == 1) {
			this.insertAtFront(value);
			return;
		}
		if (position == this.size + 1) {
			this.insertAtEnd(value);
			return;
		}

		const node = new Node(value);
		let temp = this.head;
		position--;
		while (--position > 0) temp = temp.next;
		node.next = temp.next;
		temp.next = node;
		this.size++;
		return;
	}

	remove(value) {
		if (this.isEmpty()) {
			console.log('List is Empty! Can not perform operation!');
			return;
		}
		if (this.size === 1 && this.head.data === value) {
			const ele = this.head.data;
			this.head = null;
			this.size--;
			return ele;
		}
		let temp = this.head,
			prev;
		while (temp) {
			if (temp.data == value) break;
			prev = temp;
			temp = temp.next;
		}
		if (!temp) {
			console.log('Given value is not present in the list!');
			return;
		}
		if (this.head.data == temp.data) {
			this.removeAtFront();
			return;
		}
		prev.next = temp.next;
		this.size--;
		return;
	}

	removeAtFront() {
		if (this.isEmpty()) {
			console.log('List is Empty! Can not perform operation!');
			return;
		}
		if (this.size === 1) {
			const temp = this.head.data;
			this.head = null;
			this.size--;
			return temp;
		}
		const temp = this.head.data;
		this.head = this.head.next;
		this.size--;
		return temp;
	}

	removeAtEnd() {
		if (this.isEmpty()) {
			console.log('List is Empty! Can not perform operation!');
			return;
		}
		if (this.size === 1) {
			const ele = this.head.data;
			this.head = null;
			this.size--;
			return ele;
		}
		let last = this.head,
			prev = null;
		while (last.next) {
			prev = last;
			last = last.next;
		}
		prev.next = last.next;
		this.size--;
		return;
	}

	emptyList() {
		if (this.isEmpty()) {
			console.log('List is already Empty!');
			return;
		}
		while (this.size) this.removeAtFront();
		console.log('All elements has been removed');
		return;
	}

	search(value) {
		if (this.isEmpty()) {
			console.log('List is Empty! Can not perform operation!');
			return;
		}
		let temp = this.head;
		while (temp) {
			if (temp.data == value) return true;
			temp = temp.next;
		}
		return false;
	}

	reverse() {
		let prev = null,
			current = null,
			next = this.head;
		while (next) {
			prev = current;
			current = next;
			next = next.next;
			current.next = prev;
		}
		this.head = current;
	}

	print() {
		if (this.isEmpty()) {
			console.log('List is Empty!');
			return;
		}
		let temp = this.head;
		let str = '';
		while (temp) {
			str += `${temp.data} `;
			temp = temp.next;
		}
		console.log(str);
	}
}

export class LLQueue {
	constructor() {
		this.root = new LinkedList();
	}
	enqueue(value) {
		return this.root.insertAtEnd(value);
	}
	dequeue() {
		return this.root.removeAtFront();
	}
}
