// Set in JS
const set = new Set();
set.add(2);
set.add(1);
set.add(3);
console.log(set.delete(3));
console.log(set.entries());
console.log(set.keys());
console.log(set.values());
console.log(set);

//Map
const map = new Map([
	[1, 2],
	[3, 4],
]);
map.set(5, 6);
console.log(map.get(4));
console.log(map.get(5));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map);
