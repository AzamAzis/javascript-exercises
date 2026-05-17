const fibonacci = function (number) {
  let num;

  if (typeof number !== "number") {
    num = parseInt(number, 10);
  } else {
    num = number;
  }

  if (number < 0) return "OOPS";
  if (number == 0) return 0;
  if (number == 1) return 1;

  let first = 1;
  let second = 0;

  for (let i = 2; i <= number; i++) {
    let current = first + second;
    second = first;
    first = current;
  }

  return first;
};

// Do not edit below this line
module.exports = fibonacci;
