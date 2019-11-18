// Create code that outputs all prime numbers from the given range (with “for”)
function getPrimesInRange(a, b) {
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  }

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
console.log(getPrimesInRange(10, 20));

// Write the function min (a, b), which returns the smaller of the numbers a, b.
function min(a, b) {
  return (a < b && a) || b;
}
console.log(min(3, 1));

// Write the function fib (n), which returns the n-th Fibonacci number.

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

// Write a function getDecimal (num), which returns the decimal part of the number

function getDecimal(n) {
  const up = Math.ceil(n);
  return up - n;
}

console.log(getDecimal(2.1));

// Write the function ucFirst (str), which returns a string str with the first capital letter, for example ucFirst ("abcd") == "Abcd";
function ucFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(ucFirst("abcd"));

// Write a function checkSpam (str), which returns true if the string str contains "XXX",
//  and otherwise false. The function must be case insensitive.

function checkSpam(str) {
  if (str.match(/xxx+/i)) {
    return true;
  }
  return false;
}
console.log(checkSpam("dxxXkfdfl"));

// Create a function truncate (str, maxlength), which checks the length of the string str,
// and if it exceeds maxlength - replaces the end of str with "...",
//  so that its length becomes maxlength. For example: truncate("Hello World!!!",8) == "Hello..."
function truncate(str, maxlength) {
  if (str.length >= maxlength) {
    str = str.slice(0, maxlength - 3);
    return `${str}...`;
  }
}
console.log(truncate("Hello World!!!", 8));

// Create the function isEmpty (obj), which returns true if there are
// no properties in the object and false if there is at least one property.
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));

// Create the function multiplyNumeric (obj),
// which takes an object and multiplies all numeric properties by 2.
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric({ a: 1, b: "hi", c: 2 }));

// Create the function find (arr, value), which searches for value in array and returns its number,
//  if found, or -1 if not found.

function find(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return value;
    }
  }
  return -1;
}

console.log(find([1, 4, 5], 4));

// Create a function filterRange (arr, a, b) that takes an array of numbers arr and
// returns a new array that contains only numbers from the arr range from a to b. The function should not change the arr.
function filterRange(arr, a, b) {
  const newArr = arr.filter(item => item >= a && item <= b);
  return newArr;
}
console.log(filterRange([1, 5, 8, 2, 7, 4], 1, 4));

// Write the function camelize (str), which converts lines of the form "my-short-string" to "myShortString".

function camelize(str) {
  const arr = str.split("-");
  const newArr = arr.map((item, i) => {
    return (item =
      i !== 0 ? item.slice(0, 1).toUpperCase() + item.slice(1) : item);
  });
  return newArr.join("");
}
console.log(camelize("my-short-string"));

// Use the sort function to "shake" the array elements in random order. arr.sort ("your function")

function shake(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
console.log(shake([1, 5, 3, 7]));

// Write a function getSums (arr),
//  which returns a new array of the same number of elements,
// in which at each position there must be a sum of elements arr to this position inclusive.
// arr = [1,2,3,4,5];
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
function getSums(arr) {
  const newArr = arr.map((item, i) => {
    let j = i,
      sum = 0;
    while (j > 0) {
      sum += arr[j];
      j--;
    }
    item = sum;
    return item + 1;
  });
  console.log(newArr);
  return newArr;
}
console.log(getSums([1, 2, 3, 4, 5]));

// Write the function getLastDayOfMonth (year, month),
// which returns the last day of the month.

function getLastDayOfMonth(year, month) {
  function isLeapYear(y) {
    return new Date(y, 1, 29).getDate() === 29;
  }
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return 31;
    case "February":
      return isLeapYear(year) ? 29 : 28;
    case "February":
    case "April":
    case "June":
    case "September":
    case "November":
      return 30;
    default:
      return "Wrong month";
  }
}
console.log(getLastDayOfMonth(2000, "October"));

// Write the function printNumbersInterval (),
// which sequentially displays in the console numbers from 1 to 20,
// with an interval between the numbers of 100 ms.
// Write the function printNumbersInterval (),
//  which sequentially displays in the console numbers from 1 to 20,
// with an interval between the numbers of 100 ms.
// Use setTimeout instead of setInterval.

function printNumbersInterval() {
  for (let i = 10; i <= 20; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}
console.log(printNumbersInterval());

// Deep copy of object

function deepCopy(obj) {
  if (obj + "" === "null") {
    return null;
  }
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      newObj[key] = obj[key];
    } else {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}

const a = { a: "1", b: { a: 2 } };
const b = deepCopy(a);

console.log(b);
