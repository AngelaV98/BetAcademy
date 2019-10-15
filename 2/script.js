{
  const num = prompt("Enter the number!");
  function getNum(n) {
    return 10 ** n - 1;
  }
  console.log(getNum(num));
}

{
  const name = prompt("Enter your name!");
  const age = prompt("Enter you age!");
  function getCapitalized(str) {
    return `${str
      .toLowerCase()
      .charAt(0)
      .toUpperCase()}+${str.slice(1)}`;
  }
  console.log(getCapitalized(name));

  function getAgeAfter10Years(n) {
    return n + 10;
  }
  console.log(getAgeAfter10Years(age));
}

{
  let from = prompt("Enter the first number!");
  let to = prompt("Enter the second number!");

  function getRandomFromRange(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
  }

  console.log(getRandomFromRange(from, to));
}

{
  let year = prompt("Enter the year!");

  function getCentury(n) {
    while (n >= 100) {
      n = (n - (n % 10)) / 10;
    }
    return n + 1;
  }
}
