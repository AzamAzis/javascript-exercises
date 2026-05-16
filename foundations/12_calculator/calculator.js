const add = (a, b) => {
	const result = a + b;
	return result;
};

const subtract = (a, b) => {
	const result = a - b;
	return result;
};

const sum = (numbers) => {
	const result = numbers.reduce((number, current) => {
		return number + current;
	}, 0);
	return result;
};

const multiply = (numbers) => {
	const result = numbers.reduce((accumulator, current) => {
		return accumulator * current;
	}, 1);
	return result;
};

const power = (a, b) => {
	const result = a ** b;
	return result;
};

const factorial = (a) => {
	let result = a;

  if (a === 0 || a === 1) {
    return 1;
  } else if (a > 1) {
    for (let i = a; i > 1; i--) {
      result *= i - 1;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
