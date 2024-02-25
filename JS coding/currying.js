//Currying

//Infinite currying sum(1)(2)(3)......(8)();
const sum = function (num1) {
  return function (num2) {
    if (num2 === undefined) return num1;
    return sum(num1 + num2);
  };
};
console.log(sum(1)(), sum(1)(2)(3)());

// convert fun(1,2,3,4) to fun(1)(2)(3)(4)
const curriedFn = function (fn) {
  return function curry(...args) {
    if (fn.length <= args.length) return fn(...args);
    return function (...newArgs) {
      return curry(...args, ...newArgs);
    };
  };
};
const sumFn = (a, b, c) => a + b + c;
const curriedSum = curriedFn(sumFn);
console.log(curriedSum(1)(2)(4));
