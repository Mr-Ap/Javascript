// Linear Search
// O(n)
const linearSearch = (num, arr) => {
	arr.forEach((ele) => {
		if (ele === num) return true;
	});
	return false;
};

// Binary search
// Note : Array/input must be sorted
// O(logN)

const binarySearch = (num, arr) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === num) return mid;
		if (arr[mid] < num) left = mid + 1;
		else if (arr[mid] > num) right = mid - 1;
	}
	return -1;
};

// Binary search
// Note : Array/input must be sorted
// O(logN)
const recursiveBinarySearch = (arr, left, right, num) => {
	if (left > right) return -1;

	let mid = Math.floor((left + right) / 2);
	if (arr[mid] == num) return mid;
	if (arr[mid] < num) return recursiveBinarySearch(arr, mid + 1, right, num);
	if (arr[mid] > num) return recursiveBinarySearch(arr, left, mid - 1, num);
};
