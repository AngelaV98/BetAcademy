function _pop(arr) {
  let elem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return elem;
}
function _push(arr, ...elem) {
  for (let i = 0, l = elem.length; i < l; i++) {
    arr[arr.length] = elem[i];
  }
  return arr.length;
}
function _shift(arr) {
  let elem = arr[0];
  for (let i = 0, l = arr.length; i < l; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return elem;
}
function _unshift(arr, ...elems) {
  let len = arr.length + elems.length;
  let elemsLen = elems.length;
  let arrLen = arr.length;
  arr.length = len;

  for (let i = 0; i < len; i++) {
    arr[len - 1 - i] = arr[arrLen - 1 - i];
  }
  for (let i = 0; i < len; i++) {
    if (i < elemsLen) {
      arr[i] = elems[i];
    }
  }

  return arr.length;
}
function _concat(arr, ...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arr.push(...arrays[i]);
  }
  return arr;
}

function _reverse(arr) {
  let len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
  return arr;
}

function _splice(arr, start, deleteCount, ...itemN) {
  let len = arr.length;
  let newArr = [];
  for (let i = 0; i < len; i++) {
    if (i >= start && i < start + deleteCount) {
      newArr.push(arr[i]);
    }
  }
  if (itemN.length > 0) {
    newArr = newArr.concat(itemN);
  }
  return newArr;
}

function _slice(arr, start, deleteCount, ...itemN) {
  let len = arr.length;
  let newArr = [];
  if (arguments.length === 1) {
    return [...arr];
  }
  for (let i = start; i < deleteCount; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function _join(arr, sym = ",") {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + sym;
  }
  return str;
}

const a = {
  val: 0,
  valueOf: function() {
    return ++this.val;
  }
};
console.log(a == 1 && a == 2 && a == 3);
