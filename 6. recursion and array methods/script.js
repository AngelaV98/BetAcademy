// 1. Write a JavaScript program to calculate the factorial of a number.
function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log(gcd(316, 420));

// 3. Write a JavaScript program to get the integers in range (x, y).
function getIntegersFromRange(x, y, arr = []) {
  if (y === x) return arr.reverse();
  arr.push(y);
  return getIntegersFromRange(x, --y, arr);
}
console.log(getIntegersFromRange(2, 8));

// 4. Write a JavaScript program to compute the sum of
//  an array of integers.

function getSum(arr, i = arr.length - 1) {
  if (i <= 0) return arr[0];
  return arr[i] + getSum(arr, --i);
}
console.log(getSum([1, 2, 3, 4, 5, 6]));

// 5. Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times
// the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
function exponent(num, exp) {
  if (exp <= 0) {
    return 1;
  }
  return num * exponent(num, --exp);
}
console.log(exponent(8, 1));

// 6. Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
// Each subsequent number is the sum of the previous two.

function fibN(n) {
  function fibonacci(n) {
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(fibonacci(i));
  }
  return arr;
}
console.log(fibN(8));

// 7. Write a JavaScript program to check
// whether a number is even or not.
function isEven(n) {
  if (n === 1) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  return isEven((n -= 2));
}
console.log(isEven(6));

// 8. Write a JavaScript program for binary search.

function binarySearch(elem, arr, sorted = []) {
  if (arr.length === 1) {
    return sorted.push(...arr);
  }
}

console.log(binarySearch(5, [0, 1, 2, 3, 4, 5, 6]));

// 9. Write a merge sort program in JavaScript.
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const halfIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, halfIndex));
  const right = mergeSort(arr.slice(halfIndex));
  return merge(left, right);
}

function merge(left, right) {
  const res = [];
  while (left.length > 0 && right.length > 0)
    res.push(left[0] < right[0] ? left.shift() : right.shift());
  return res.concat(left.length ? left : right);
}

console.log(mergeSort([1, 7, 3, 7, 3, 4]));

// Array methods

// 1. Array reduce implementation
Array.prototype._reduce = function _reduce(cb, accumulator) {
  let i = 0;
  if (accumulator === undefined) {
    accumulator = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

{
  let arr = [1, 2, 3];
  // console.log(
  //   arr._reduce(
  //     (accumulator, currentValue, index, arr) => {
  //       return accumulator + currentValue;
  //     },
  //     0
  //   )
  // );
}

// 2. Array map implementation
Array.prototype._map = function _map(cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};
{
  let arr = [1, 2, 3];
  // console.log(arr._map(item => item * item));
}

// 3. Array filter implementation
Array.prototype._filter = function _filter(cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
{
  let arr = [1, 2, 3];
  // console.log(arr._filter(item => !(item % 2)));
}

// 4. Array every implementation

Array.prototype._every = function _every(cb) {
  if (this.length === 0) {
    return true;
  }
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
{
  let arr = [1, 2, 6];
  // console.log(
  //   arr._every(elem => {
  //     return !(elem % 2);
  //   })
  // );
}
// 5. Array some implementation
Array.prototype._some = function _some(cb) {
  if (this.length === 0) {
    return false;
  }
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
{
  let arr = [1, 4, 5];
  console.log(
    arr._some(elem => {
      return !(elem % 2);
    })
  );
}

// 6. Array find implementation

Array.prototype._find = function _find(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};
{
  let arr = [1, 2, 3, 4];
  // console.log(arr._find(elem => !(elem % 2)));
}

// 7. Array sort implementation
Array.prototype._sort = function _sort(cb) {
  for (let i = 0; i < this.length; i++) {
    let curMin = i;
    for (let j = i + 1; j < this.length; j++) {
      if (cb === undefined) {
        if (`${this[j]}` < `${this[curMin]}`) {
          let temp = this[j];
          this[j] = this[curMin];
          this[curMin] = temp;
        }
      } else {
        if (cb(`${this[j]}`, `${this[curMin]}`) < 0) {
          let temp = this[j];
          this[j] = this[curMin];
          this[curMin] = temp;
        }
      }
    }
  }
  return this;
};
{
  let arr = [1, 2, 5, 16, 8, 3, 7, 1, 6, 4, 3, 7];
  // console.log(arr._sort());

  // console.log(arr._sort((a,b)=>a-b));
}
