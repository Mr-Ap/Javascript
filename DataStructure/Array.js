const arr = [1, 2, 3, 4, 5, 6];

//Array.splice(startIndex,count,...items?)
//deletes items=Count from the array starting from index = startIndex. if passed items -> will insert from startIndex.
//returns array of removed elements

// const removedElementsArr = arr.splice(1, 3, 8);
//----------------------------------------------------------------------------------------------------------------------------
//Array.slice(start?,end?)
//returns copy of array starting from start (0 based indexing)
// negative index can be used to indicate an offset from the end of the array

// const slicedArr = arr.slice(2,-1);

//----------------------------------------------------------------------------------------------------------------------------
// Array.shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// const firstEle = arr.shift();
// console.log(firstEle, arr);
//----------------------------------------------------------------------------------------------------------------------------

// Array.unshift()
//Inserts new elements at the start of an array, and returns the new length of the array.

//const lastEle = arr.unshift(8, 9);

// convert fun(1,2,3,4) to fun(1)(2)(3)(4)

const fn = (a, b) => a + b;

function convert(fn) {
  return function curry(...args) {
    return fn(...args);
  };
}
