//Document.getElementsByClassName(classNames: string): HTMLCollectionOf<Element>
const customGetElementsByClassName = function (className, context = document) {
  const allElements = context.getElementsByTagName("*");
  const result = [];
  allElements.forEach((element) => {
    const classes = element.className.split("");
    if (classes.includes(className)) result.push(element);
  });

  return result;
};


//Document.getElementsByTagName(name): HTMLCollectionOf<Element>
function getElementsByTagName(tagName, context = document) {
  return Array.from(context.getElementsByTagName(tagName));
}


const debounce = function (cb, delay = 500) {
  return function (...args) {
    let timeout;
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      cb(...args);
    }, delay);
  };
};



const throttle = function (cb, delay = 500) {
  let last = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    cb(...args);
    return;
  };
};


const reliableThrottle = function (cb, delay = 500) {
  let shouldWait = false;
  let waitingArgs = null;
  const timeoutFn = () => {
    if (waitingArgs === null) shouldWait = false;
    else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFn, delay);
    }
  }
  return function (...args) {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFn, delay);
  };
};
