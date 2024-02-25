//Array polyfills

//array.map(function(value,index,array))
const myArray = [1, 5, 4, 15, 12];

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let index = 0; index < this.length; index++)
    result.push(cb(this[index], index, this));

  return result;
};
console.log(myArray.myMap((ele) => ele * 2));

//array.filter(function(val,index,array))
Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) result.push(this[index]);
  }
  return result;
};
console.log(myArray.myFilter((ele) => ele > 6));

//array.reduce(function(accumlator,val,index,array),initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let index = 0; index < this.length; index++) {
    if (index === 0 && !acc) acc = this[0];
    else acc = cb(acc, this[index], index, this);
  }
  return acc;
};
console.log([1, 4, 5].myReduce((acc, ele) => [...acc, ele], []));

//array.sort(compareFn?(ele1,ele2))
Array.prototype.mySort = function (compareFn) {
  //make shallow copy of array
  const shallowArray = this.slice();
  const defaultCompare = (a, b) => {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  };
  const compare = compareFn || defaultCompare;

  for (let i = 0; i < shallowArray.length - 1; i++) {
    for (let j = 0; j < shallowArray.length - i - 1; j++) {
      if (compare(shallowArray[j], shallowArray[j + 1]) > 0) {
        //swap
        const temp = shallowArray[j + 1];
        shallowArray[j + 1] = shallowArray[j];
        shallowArray[j] = temp;
      }
    }
  }
  return shallowArray;
};
console.log(myArray.mySort(), myArray);
