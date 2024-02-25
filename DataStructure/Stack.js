// LIFO
// useful in tracing,undo
function Stack() {
	return {
		data: [],
		size: 0,
		push: function (value) {
			this.size = this.data.unshift(value);
			return;
		},
		pop: function () {
			if (this.size > 0) {
				this.size--;
				return this.data.shift();
			}
			return;
		},
		peek: function () {
			if (this.size > 0) return this.data[0];
			return;
		},
	};
}

function Stack2() {
	return {
		data: [],
		size: 0,
		push: function (value) {
			this.data.push(value);
			this.size = this.data.length;
			return;
		},
		pop: function () {
			if (this.size > 0) {
				this.data.pop();
				this.size--;
			}
			return;
		},
		peek: function (number) {
			if (this.size > 0 && this.size - number >= 0)
				return this.data[this.size - number];
			return;
		},
		print: function () {
			for (const iterator of this.data) {
				console.log(iterator);
			}
		},
	};
}
