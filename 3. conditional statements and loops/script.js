// 1. Write a JavaScript program that accept two integers and display the larger.
function getMax(a, b) {
  return (a > b && a) || b;
}
// console.log(getMax(1, 2));

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
function getSignOfProduct(a, b, c) {
  let sign = a * b * c < 0 ? "-" : "+";
  alert(`The sign is ${sign}`);
}
// getSignOfProduct(3, -7, 2);

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
function sortedThreeNumbers(a, b, c) {
  let str = "";
  if (a < b && a < c) {
    if (b < c) {
      str = `${a} ${b} ${c}`;
    } else {
      str = `${a} ${c} ${b}`;
    }
  } else if (b < a && b < c) {
    if (a > c) {
      str = `${b} ${c} ${a}`;
    } else {
      str = `${b} ${a} ${c}`;
    }
  } else {
    if (a > b) {
      str = `${c} ${b} ${a}`;
    } else {
      str = `${c} ${a} ${b}`;
    }
  }
  alert(str);
}
// sortedThreeNumbers(1, 2, 3);

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
function getMaxOf5(a, b, c, d, e) {
  let max;
  if (a > b && a > c) {
    max = a;
  } else {
    if (b > c) {
      max = b;
    } else {
      max = c;
    }
  }
  if (d > e) {
    if (max < d) {
      max = d;
    }
  } else {
    if (max < e) {
      max = e;
    }
  }
  alert(max);
}
// getMaxOf5(8, 2, 1, 5, 6);

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
function isOddOrEven() {
  for (let i = 0; i < 15; i++) {
    let str = `${i} is ${(i % 2 == 0 && "even") || "odd"}`;
    console.log(str);
  }
}
// console.log(isOddOrEven());

// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
{
  const students = [
    { name: "David", mark: 80 },
    { name: "Vinoth", mark: 77 },
    { name: "Divya", mark: 88 },
    { name: "Ihitha", mark: 95 },
    { name: "Thomas", mark: 68 }
  ];
  let sum = 0;
  let len = students.length;
  for (let i = 0; i < len; i++) {
    sum += students[i].mark;
  }
  let avg = sum / len;
  let grade;
  if (avg < 60) {
    grade = "F";
  } else if (avg < 70) {
    grade = "D";
  } else if (avg < 80) {
    grade = "C";
  } else if (avg < 90) {
    grade = "B";
  } else if (avg < 100) {
    grade = "A";
  }
  console.log(`Average: ${avg}, grade: ${grade}`);
}

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (let i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    console.log("FIzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// 8. According to Wikipedia a happy number is defined by the following process :  "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".  Write a JavaScript program to find and print the first 5 happy numbers.

function happyNumber(num) {
  let n = 0;
  let sum = 0;
  while (num > 0) {
    n = num % 10;
    sum = sum + n * n;
    num = (num - n) / 10;
  }
  return sum;
}

let count = 0;
for (let i = 1; count < 5; i++) {
  let k = i;
  while (k !== 1 && k !== 4) {
    k = happyNumber(k);
  }
  if (k === 1) {
    console.log(`${i}`);
    count++;
  }
}

// 9.
// Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example,
// 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
function armstrongNumber(a, b, c) {
  return a ** 3 + b ** 3 + c ** 3;
}
// console.log(armstrongNumber(3, 7, 1));

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

function drawTriangle() {
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i + 1; j++) {
      document.write("* ");
    }
    document.write("<br>");
  }
}
// drawTriangle();

// 11.
// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
function gcd(a, b) {
  if (a === b) {
    return a;
  }
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
  return gcd(a, b);
}
// console.log(gcd(6, 24));

// 12.  Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
// console.log(sum);
