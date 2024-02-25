//O(n*n)
// Finding a correct ele for a desired position
const selectionSort = (arr) => {
	for (let index = 0; index < arr.length - 1; index++) {
		for (let j = index + 1; j < arr.length; j++) {
			if (arr[j] < arr[index]) {
				let temp = arr[index];
				arr[index] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
};

// Bubble sort
//O(n*n)
const bubbleSort = (arr) => {
	let swapped = false;
	do {
		swapped = false;
		for (let index = 0; index < arr.length - 1; index++) {
			if (arr[index] > arr[index + 1]) {
				let temp = arr[index];
				arr[index] = arr[index + 1];
				arr[index + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
};

//Insertion Sort
// O(n*n)
const insertionSort = (array) => {
	for (let index = 1; index < array.length; index++) {
		let ele = array[index];
		let j;
		for (j = index; j > 0; j--) {
			if (ele < array[j - 1]) array[j] = array[j - 1];
			else break;
		}
		array[j] = ele;
	}
	return array;
};

// Quick Sort

const quickSort = (array) => {
	if (array.length < 2) return array;
	let left = [];
	let right = [];
	let pivot = array[array.length - 1];

	for (let index = 0; index < array.length - 1; index++) {
		if (array[index] < pivot) left.push(array[index]);
		else right.push(array[index]);
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
};

// Merge Sort
// O(nlogn)
const mergeTwoArrays = (array1, array2) => {
	let temp = [];
	while (array1.length && array2.length) {
		if (array1[0] < array2[0]) temp.push(array1.shift());
		else temp.push(array2.shift());
	}
	return [...temp, ...array1, ...array2];
};

const mergeArray = (array, left, mid, right) => {
	let i = left;
	let j = mid + 1;
	let temp = [];
	while (i <= mid && j <= right) {
		if (array[i] < array[j]) temp.push(array[i++]);
		else temp.push(array[j++]);
	}
	while (i <= mid) temp.push(array[i++]);
	while (j <= right) temp.push(array[j++]);
	return temp;
};

const mergeSort = (array) => {
	if (array.length < 2) return array;
	let mid = Math.floor(array.length / 2);
	let left = array.slice(0, mid);
	let right = array.slice(mid);

	return mergeTwoArrays(mergeSort(left), mergeSort(right));
};
