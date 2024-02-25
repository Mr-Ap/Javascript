//Fibonacci series
// O(n)
const iterativeFib = (num) => {
  if (num == 1) return [0];
  if (num == 2) return [0, 1];
  let result = [0, 1];
  for (let index = 2; index < num; index++) {
    result.push(result[index - 1] + result[index - 2]);
  }
  return result;
};

//Fibonacci series
// recursive

//nth element of fibonacci series
// O(2^n)
const recursiveFib = (num) => {
  if (num < 2) return num;

  return recursiveFib(num - 1) + recursiveFib(num - 2);
};

// factorial
// O(n)
const factorial = (num) => {
  if (num == 1) return 1;
  return num * factorial(num - 1);
};

// Prime or not
// O(n^2)
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) return false;
  }
  return true;
};

//power of 2
// O(1)
const isPowerofTwo = (num) => {
  return (num & (num - 1)) === 0;
};
