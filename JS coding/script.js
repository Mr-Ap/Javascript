let container = document.getElementById("container");

//polyfills for array
container.innerText = "Array Polyfills";
const arr = [1, 2, 3, 4];

/*array.map((ele,index,array)=>{})*/
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};
const resMap = arr.myMap((ele) => ele + 5);

//array.filter((ele,array)=>{})
Array.prototype.Myfilter = function (cb) {
  let results = [];
  for (let i = 0; i < this.length; i++)
    if (cb(this[i], this)) results.push(this[i]);
  return results;
};

const resFilter = arr.Myfilter((ele) => ele < 2);

//array.reduce((acc,ele,index,arr)=>{},initialValue)
Array.prototype.Myreduce = function (cb, initialValue) {
  let prevRes = initialValue;
  for (let i = 0; i < this.length; i++) {
    prevRes = prevRes ? cb(prevRes, this[i], i, this) : this[i];
  }
  return prevRes;
};
const resReduce = arr.Myreduce((acc, ele) => acc + ele);

//-------------------------------------------------------------------------------------------------

//Currying
//Infinite currying sum(1)(2)(3)......(8)();

function sum(num1) {
  return function (num2) {
    if (num2) return sum(num1 + num2);
    return num1;
  };
}
// console.log(sum(1)(3)());

// convert fun(1,2,3,4) to fun(1)(2)(3)(4)

const normal = (a, b, c, d) => a + b + c + d;

function convertIntoCurried(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    else
      return function (...next) {
        return curried(...args, ...next);
      };
  };
}

const curriedFn = convertIntoCurried(normal);
console.log(curriedFn(1)(2)(3)(4));

//-------------------------------------------------------------------------------------------------

container.innerText = "Debounce and Throttle";
const inputEle = document.getElementById("temp");
const contentEle = document.getElementById("content");
inputEle.addEventListener("input", (e) => {
  contentEle.innerText = e.target.value;
  updateDebounceText(e.target.value);

  updateThrottleText(e.target.value);
  updateThrottleFnText(e.target.value);
});

//Debouncing

const debounceEle = document.getElementById("debounce");

const debounce = (cb, delay = 1000) => {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...rest);
    }, delay);
  };
};

const updateDebounceText = debounce((text) => (debounceEle.innerText = text));

//Throttling
const throttleEle = document.getElementById("throttle");
const throttleFnEle = document.getElementById("throttleFn");

const throttle = (cb, delay = 1000) => {
  let wait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) wait = false;
    else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (wait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    wait = true;
    setTimeout(timeoutFunc, delay);
  };
};

const throttleFn = (cb, delay = 1000) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    cb(...args);
    return;
  };
};

const updateThrottleText = throttle((text) => (throttleEle.innerText = text));
const updateThrottleFnText = throttleFn(
  (text) => (throttleFnEle.innerText = text)
);

//-------------------------------------------------------------------------------------------------

//polyfillsfor call apply and bind

const obj = {
  name: "Ap",
};
const obj2 = {
  name: "Vp",
};

Function.newBind = function (context = {}, ...args) {
  if (typeof this != "function") return;
  return function (...newargs) {
    context.fn = this;
    context.fn(...args, ...newargs);
  };
};

function tempFun(str) {
  console.log(this.name + " " + str);
}
//fn.call(context,arguments)

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error("Not a callable function..!");
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error("Not a callable function..!");
  if (!Array.isArray(args)) throw new Error("Not a array..!");
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myNewBind = function (context, ...args) {
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...newArgs, ...args);
  };
};

Function.prototype.myBind = function (context, ...args) {
  let ct = this;
  return function (...newArgs) {
    ct.myCall(context, ...args, ...newArgs);
  };
};

// ----------------------------------

//prototype inheritance

function Parent() {
  this.name = "Parent";
  this.printParent = function () {
    console.log(this.name);
  };
}

//can attach a function to the current object's prototype-object
Parent.prototype.getParent = function () {
  console.log(this.name);
};

const parentObj = new Parent();

//can assign a function to the object
parentObj.getName = function () {
  console.log(this.name);
};

//create a new object with the parent prototype
const childObj = Object.create(Parent.prototype);

// childObj.prototype.constructor is Parent()
// childObj.prototype.constructor.name is Parent

//For proper inhritance
function Child() {
  Parent.call(this);
  this.name = "child";
  this.printChild = function () {
    console.log(this.name);
  };
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
