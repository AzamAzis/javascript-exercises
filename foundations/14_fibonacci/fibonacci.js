// const fibonacci = function (number) {
//   let num;

//   if (typeof number !== "number") {
//     num = parseInt(number, 10);
//   } else {
//     num = number;
//   }

//   if (number < 0) return "OOPS";
//   if (number == 0) return 0;
//   if (number == 1) return 1;

//   let first = 1;
//   let second = 0;

//   for (let i = 2; i <= number; i++) {
//     let current = first + second;
//     second = first;
//     first = current;
//   }

//   return first;
// };

const fibonacci = (number) => {
  const fibNum = [0, 1];

  let count;
  if (typeof number !== "number") {
    count = parseInt(number, 10);
  } else {
    count = number
  }

  if (count < 0) return "OOPS";
  if (count === 1) return 1;

  for (let i = 2; i <= count; i++) {
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
  }
  return fibNum[count];
}

// Do not edit below this line
module.exports = fibonacci;
