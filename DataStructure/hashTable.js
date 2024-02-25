class HashTable {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}

	hashFunction(key) {
		//write logic for your hash function
		let total = 0;
		for (let index = 0; index < key.length; index++) {
			total += key.charCodeAt(index);
		}
		return total % this.size;
	}

	get(key) {
		let hashedIndex = this.hashFunction(key);
		let bucket = this.table[hashedIndex];
		if (!bucket) {
			console.log('key is not present!');
			return undefined;
		}
		//Find key
		const itemPresent = bucket.find((ele) => ele[0] === key);
		return itemPresent ? itemPresent[1] : undefined;
	}

	set(key, value) {
		let hashedIndex = this.hashFunction(key);
		let bucket = this.table[hashedIndex];
		if (!bucket) bucket = [[key, value]];
		else {
			//find if key is already present
			const itemPresent = bucket.find((ele) => ele[0] === key);
			itemPresent ? (itemPresent[1] = value) : bucket.push([key, value]);
		}
		this.table[hashedIndex] = bucket;
		return;
	}

	remove(key) {
		let hashedIndex = this.hashFunction(key);
		let bucket = this.table[hashedIndex];
		if (!bucket) {
			console.log('key is not present!');
			return;
		}
		//Find key
		const itemPresent = bucket.find((ele) => ele[0] === key);
		if (itemPresent) bucket.splice(bucket.indexOf(itemPresent), 1);
		return;
	}

	display() {
		for (let index = 0; index < this.size; index++) {
			if (this.table[index]) console.log(index, this.table[index]);
		}
	}
}

const obj = new HashTable(10);
obj.set('hey', 'Hey');
obj.set('hi', 12);
