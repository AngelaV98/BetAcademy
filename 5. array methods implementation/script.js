// 1.
// Write a recoursive function, that will get an array as an argument and on every step
// it must remove an element from array untill the array is empty.
// Array length can be very big.

function emptyArray(arr) {
  let count = 0;
  function empty(arr) {
    if (count >= 10000 || arr.length === 0) {
      return arr;
    }
    count++;

    arr.pop();
    return empty(arr);
  }
  while (arr.length) {
    arr = empty(arr);
    count = 0;
  }
  return arr;
}
{
  let arr = [];
  for (let i = 0; i < 150000; i++) {
    arr.push(1);
  }
  // emptyArray(arr);
}

// Array methods

// 2. Array map implementation
function _map(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i, arr));
  }
  return newArr;
}
{
  let arr = [1, 2, 3];
  // console.log(_map(arr, item => item * item));
  // console.log(arr);
}

// 3. Array filter implementation
function _filter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
{
  let arr = [1, 2, 3];
  // console.log(_filter(arr, item => !(item % 2)));
  // console.log(arr);
}

// 4. Array reduce implementation
function _reduce(arr, cb, accumulator) {
  let i = 0;
  if (accumulator === undefined) {
    accumulator = arr[0];
    i = 1;
  }
  for (; i < arr.length; i++) {
    accumulator = cb(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

{
  let arr = [1, 2, 3];
  // console.log(
  //   _reduce(
  //     arr,
  //     (accumulator, currentValue, index, arr) => {
  //       return accumulator + currentValue;
  //     },
  //     0
  //   )
  // );
}

// 5. Array every implementation

function _every(arr, cb) {
  if (arr.length === 0) {
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
{
  // console.log(
  //   _every([1, 2, 6], elem => {
  //     return !(elem % 2);
  //   })
  // );
}
// 6. Array some implementation
function _some(arr, cb) {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
{
  // console.log(
  //   _some([1, 3, 5], elem => {
  //     return !(elem % 2);
  //   })
  // );
}

// 7. Array find implementation

function _find(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

// console.log(_find([1, 2, 3, 4], elem => !(elem % 2)));

// 8. Array sort implementation
function _sort(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let curMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (cb === undefined) {
        if (`${arr[j]}` < `${arr[curMin]}`) {
          let temp = arr[j];
          arr[j] = arr[curMin];
          arr[curMin] = temp;
        }
      } else {
        if (cb(`${arr[j]}`, `${arr[curMin]}`) < 0) {
          let temp = arr[j];
          arr[j] = arr[curMin];
          arr[curMin] = temp;
        }
      }
    }
  }
  return arr;
}
// console.log(_sort([1,2,5,16,8,3,7,1,6,4,3,7]));

// console.log(_sort([1,2,5,16,8,3,7,1,6,4,3,7],(a,b)=>a-b));

// Sorting algorithms

// 9. Bubble sort
function _bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
// console.log(_bubble([1, 6, 4, 3, 7]));

// 10. Selection sort
function _selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[curMin]) {
        let temp = arr[j];
        arr[j] = arr[curMin];
        arr[curMin] = temp;
      }
    }
  }
  return arr;
}

// console.log(_selection([7, 2, 8, 12, 1, 2, 8, 5, 3, 9, 4, 1]));

// 11. Insertion sort
function _insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i--;
      }
      j--;
    }
  }

  return arr;
}
// console.log(_insertion([1, 2, 5, 16, 8, 3, 7, 1, 6, 4, 3, 7]));
