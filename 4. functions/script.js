// 1. Write a JavaScript function that reverse a number.
function reverseNumber(n) {
  let num = n;
  let count = 0;
  let r = 0;
  while (num) {
    ++count;
    num = (num - (num % 10)) / 10;
  }
  while (n) {
    r += (n % 10) * 10 ** (count - 1);
    n = (n - (n % 10)) / 10;
    count--;
  }
  return r;
}
// console.log(reverseNumber(23466));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s === str;
}
// console.log(isPalindrome("aba"));

// 3. Write a JavaScript function that generates all combinations of a string.

function getAllCombinations(str) {
  const combs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      if (i === j) {
        continue;
      } else {
        let sub = str.slice(i, j);
        if (sub !== "") {
          combs.push(str.slice(i, j));
        }
      }
    }
  }
  return combs;
}

// console.log(getAllCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function getSortedString(str) {
  return [...str].sort().join("");
}

// console.log(getSortedString("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts
// the first letter of each word of the string in upper case.

function firstToUpper(str) {
  const arr = [...str];
  arr[0] = arr[0].toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }
  return arr.join("");
}

// console.log(firstToUpper("the quick brown fox"))

// 6. Write a JavaScript function that accepts a string as a parameter
//  and find the longest word within the string.

function getLongestWord(str) {
  let maxWord = str.substring(0, str.indexOf(" "));
  let maxLen = maxWord.length;
  let current = "";

  for (let i = maxLen; i < str.length; i++) {
    if (str[i] === " ") {
      while (str[i + 1] !== " " && i < str.length) {
        current += str[i];
        i++;
      }
      if (current.length >= maxLen) {
        maxLen = current.length;
        maxWord = current;
        current = "";
      }
    }
  }
  return maxWord;
}

// console.log(getLongestWord('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter
// and counts the number of vowels within the string

function getVowelsNumber(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "i" ||
      str[i] === "u" ||
      str[i] === "o" ||
      str[i] === "e"
    )
      count++;
  }
  return count;
}

// console.log(getVowelsNumber('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 4) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

// console.log(isPrime(1))

// 9. Write a JavaScript function which accepts an argument and returns the type.
// object, boolean, function, number, string, and undefined.
function getType(val) {
  switch (typeof val) {
    case "number":
      val = "number";
      break;
    case "string":
      val = "string";
      break;
    case "function":
      val = "function";
      break;
    case "boolean":
      val = "boolean";
      break;
    case "object":
      val = "object";
      break;
  }
  return val;
}
// console.log(getType(5));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function getIdentityMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      if (i === j) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

// console.log(getIdentityMatrix(4));

// 11. Write a JavaScript function which will take an array of numbers
// stored and find the second lowest and second greatest numbers, respectively.
function getSecondeMaxAndMin(arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  return { max: arr[arr.length - 2], min: arr[1] };
}
// console.log(getSecondeMaxAndMin([1,2,3,4,5]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer
// that is equal to the sum of its proper positive divisors, that is, the sum of its positive
// divisors excluding the number itself (also known as its aliquot sum). Equivalently,
// a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
//  and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive
// divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
// This is followed by the perfect numbers 496 and 8128.

function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum === n;
}

// console.log(isPerfect(6))

// 13. Write a JavaScript function to compute the factors of a positive integer.
function getFactors(n) {
  let str = "1, ";
  const len = n;
  for (let i = 2; i < len; i++) {
    while (n % i == 0) {
      str += `${i}, `;
      n /= i;
    }
  }
  return str;
}
// console.log(getFactors(8))

// 14. Write a JavaScript function to convert an amount to coins.

function convertToCoins(num, coins) {
  let minSub = 0;
  let nearestNum = 0;
  let str = ``;
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    if (count === 0 && num - coins[i] >= 0) {
      minSub = num - coins[i];
      nearestNum = coins[i];
      count++;
    } else {
      if (num - coins[i] < minSub) {
        minSub = num - coins[i];
        nearestNum = coins[i];
      }
    }
  }

  if (minSub <= 0) {
    return `${str} ${num}`;
  }

  return `${str} ${nearestNum} ${convertToCoins(minSub, coins)}`;
}
// console.log(convertToCoins(46,[25,10,5,2,1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result

function getExp(n, e) {
  let i = 0;
  let res = 1;
  while (i < e) {
    res *= n;
    i++;
  }
  return res;
}

// console.log(getExp(2,3));

// 16. Write a JavaScript function to extract unique characters from a string.

function getUniques(str) {
  let arr = str.split("").filter((elem, i) => {
    return str.indexOf(elem) === str.lastIndexOf(elem);
  });
  return arr.join("");
}
// console.log(getUniques("adjiweadd"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function getRepeatCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
// console.log(getRepeatCount('aagworitojm'))

// 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(elem, arr) {
  let midIndex = parseInt(arr.length / 2);
  let mid = arr[midIndex];
  if (elem === arr[0]) return 0;
  if (elem === mid) {
    return parseInt(arr.length / 2);
  } else if (elem < mid) {
    if (arr.length > midIndex + 1) {
      arr.length = midIndex + 1;
    }
    return binarySearch(elem, arr);
  } else {
    arr = arr.slice(midIndex);
    return midIndex + binarySearch(elem, arr);
  }
}
//  console.log(binarySearch(7,[5,6,7,8,9]))

// 19. Write a JavaScript function that returns array elements larger than a number.

function getLargerElements(num, arr) {
  return arr.filter(elem => elem > num);
}
// console.log(getLargerElements(5,[1,2,7,4,78,9]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
function getId(len) {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < len; i++) {
    id += str.charAt(Math.round(Math.random() * str.length - 1));
  }
  return id;
}
// console.log(getId(13))

// 22. Write a JavaScript function that accepts two arguments,
//  a string and a letter and the function will count the number
//  of occurrences of the specified letter within the string. Go to the editor
// Sample arguments : 'w3resource.com', 'o'
function getQuantity(str, s) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) {
      count++;
    }
  }
  return count;
}

// console.log(getQuantity('w3resource.com','o'))

// 23. Write a JavaScript function to find the first not repeated character.
//  Go to the editor
// Sample arguments : 'abacddbec'

function firstNotRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return "All charachters are repeated";
}
// console.log(firstNotRepeatedCharacter('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(arr) {
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
// console.log(bubbleSort([1,6,4,3,7]));

// 25. Write a JavaScript function that accept a list of country names
// as input and returns the longest country name as output.

function getLongestCountryName(arr) {
  let maxIndex = 0;
  let maxLen = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLen) {
      maxLen = arr[i].length;
      maxIndex = i;
    }
  }
  return arr[maxIndex];
}
// console.log(getLongestCountryName(["Australia", "Germany", "United States of America"]));

// 26.  Write a JavaScript function to find longest substring in
// a given string without repeating characters.
function getLongestUniqueSubstr(str) {
  function isUnique(str) {
    str = [...str];
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return false;
      }
    }
    return true;
  }

  let arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      if (i === j) {
        continue;
      } else {
        let sub = str.slice(i, j);
        if (sub !== "") {
          arr.push(str.slice(i, j));
        }
      }
    }
  }
  let maxLen = arr[0].length;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLen && isUnique(arr[i])) {
      maxLen = arr[i].length;
      maxIndex = i;
    }
  }
  return arr[maxIndex];
}
// console.log(getLongestUniqueSubstr("dldlfkdlkflfkskawkerkwjrkjk"));

// 27.  Write a JavaScript function that returns the longest palindrome in a given string
function getLongestPalindrome(str) {
  function isPalindrome(str) {
    return (
      str ===
      str
        .split("")
        .reverse()
        .join("")
    );
  }
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      if (i === j) {
        continue;
      } else {
        let sub = str.slice(i, j);
        if (sub !== "") {
          arr.push(str.slice(i, j));
        }
      }
    }
  }
  let maxLen = arr[0].length;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLen && isPalindrome(arr[i])) {
      maxLen = arr[i].length;
      maxIndex = i;
    }
  }
  return arr[maxIndex];
}
//  console.log(getLongestPalindrome("kjaksjrfaaeaakjrfajrj"))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function passFunction(fn, cb) {
  return fn(cb);
}
// console.log(passFunction((cb)=>{return cb()},()=>{return 1;}));

// 29. Write a JavaScript function to get the function name.

function getFnName() {
  return arguments.callee.name;
}
// console.log(getFnName());

// 1. getName(str) function for this string like this: '[object Object]' should return 'Object', for the string '[object Null]' it should return 'Null'.
function getName(str) {
  return str.substring(str.indexOf(" ") + 1, str.length - 1);
}
// console.log(getName('[object Object]'));

// 2. getRandomInt(min, max) function should return a random integer from given range.

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

// console.log(getRandomInt(10,50));

// 3. generateGuid() function should return a guid (https://guidgenerator.com/online-guid-generator.aspx).
//  It should return diffrenent guids for diffrent calls and each part of that guid shuld be unique.
// Don't use loops.
function generateGuid() {
  let str = `${Math.random()}${Date.now()}`;
  str = str.replace(".", "");

  return `${str.substr(0, 8)}-${str.substr(8, 4)}-${str.substr(
    12,
    4
  )}-${str.substr(16, 4)}-${str.substr(20, 12)}`;
}
// console.log(generateGuid())

// 4. getRandomHexadecimalColor() function should return a random color in it's hexadecimal form and should start with '#'.
function getRandomHexadecimalColor() {
  let str = "ABCDEF0123456789";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += str.charAt(Math.round(Math.random() * str.length - 1));
  }
  return color;
}
// console.log(getRandomHexadecimalColor());

// 5. isEqual(value1, value2) function should return true if objects have equal properties.
// should return true for the same primitive value also.
function isEqual(value1, value2) {
  if (Object.keys(value1).length === Object.keys(value2).length) {
    return JSON.stringify(value1) === JSON.stringify(value2);
  }
  return false;
}
// console.log(isEqual({a:1},{a:1}))

// 6. classNameOf(value) function should return class name of given value.
//     • e.g.classNameOf([]) // 'Array'
//     • classNameOf({}) // 'Object'
//     • classNameOf(null) // 'Null'

function classNameOf(value) {
  if (value + "" === "null") {
    return "Null";
  }
  if (typeof value === "object") {
    return value.constructor.name;
  } else {
    return value.constructor.name;
  }
}
// console.log(classNameOf([]));
// console.log(classNameOf({}));
// console.log(classNameOf(null));
