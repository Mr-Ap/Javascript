class Node {
	constructor(value) {
		this.data = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	isEmpty() {
		return this.root === null;
	}

	insert(value) {
		let node = new Node(value);
		if (this.isEmpty()) {
			this.root = node;
			return;
		}
		let temp = this.root,
			prev = null;
		while (temp) {
			prev = temp;
			if (value < temp.data) temp = temp.left;
			else temp = temp.right;
		}

		if (prev.data > value) prev.left = node;
		else if (prev.data < value) prev.right = node;
		else console.log('Node already present');
		return;
	}

	insertR(root, value) {
		return (root = this.insertRecursive(root, value));
	}

	insertRecursive(root, value) {
		if (!root) return new Node(value);
		if (value === root.data) {
			console.log('Node is already present!');
			return;
		}
		if (value < root.data) root.left = this.insertRecursive(root.left, value);
		else root.right = this.insertRecursive(root.right, value);
		return root;
	}

	search(value) {
		let temp = this.root;
		while (temp) {
			if (value === temp.data) return true;
			if (value < temp.data) temp = temp.left;
			if (value > temp.data) temp = temp.right;
		}
		return false;
	}

	searchRecursive(root, value) {
		if (!root) return false;
		if (root.data === value) return true;
		return root.data < value
			? this.searchRecursive(root.right, value)
			: this.searchRecursive(root.left, value);
	}

	count(root) {
		if (!root) return 0;
		return 1 + this.count(root.left) + this.count(root.right);
	}

	leafNodeCount(root) {
		if (!root) return 0;
		if (!root.left && !root.right)
			return 1 + this.leafNodeCount(root.left) + this.leafNodeCount(root.right);
		else return this.leafNodeCount(root.left) + this.leafNodeCount(root.right);
	}

	// remove a node
	remove(value) {
		this.root = this.removeNode(this.root, value);
	}

	min(root) {
		if (!root.left) return root.data;
		else return this.min(root.left);
	}

	removeNode(root, value) {
		if (!root) return root;
		if (root.data > value) root.left = this.removeNode(root.left, value);
		else if (root.data < value) root.right = this.removeNode(root.right, value);
		else {
			//remove a leaf node
			if (!root.left && !root.right) return null;

			//remove node with single child
			if (!root.left) return root.right;
			if (!root.right) return root.left;

			//remove node with both children
			//finding inrder successor and copying that value to root.data
			root.data = this.min(root.right);
			root.right = this.removeNode(root.right, root.data);
		}
		return root;
	}

	display() {
		this.inorder(this.root);
	}

	inorder(root) {
		if (root) {
			this.inorder(root.left);
			console.log(root.data);
			this.inorder(root.right);
		}
		return;
	}

	preorder(root) {
		if (root) {
			console.log(root.data);
			this.preorder(root.left);
			this.preorder(root.right);
		}
		return;
	}

	postorder(root) {
		if (root) {
			this.postorder(root.left);
			this.postorder(root.right);
			console.log(root.data);
		}
		return;
	}

	levelorder() {
		const queue = [];
		if (!this.root) {
			console.log('Empty Tree!');
			return;
		}
		queue.push(this.root);
		while (queue.length > 0) {
			let temp = queue.shift();
			console.log(temp.data);
			if (temp.left) queue.push(temp.left);
			if (temp.right) queue.push(temp.right);
		}
		return;
	}
}

const bst = new BST();
// bst.insert(4);
// bst.insert(0);
bst.insert(2);
bst.insertR(bst.root, 12);
bst.insertR(bst.root, 1);
bst.insertR(bst.root, 15);
bst.insertR(bst.root, 5);

// bst.levelorder();
// console.log(bst.searchRecursive(bst.root, 6));
// console.log(bst.searchRecursive(bst.root, 2));
// console.log(bst.count(bst.root));
// console.log(bst.leafNodeCount(bst.root));
bst.remove(2);
bst.display();
