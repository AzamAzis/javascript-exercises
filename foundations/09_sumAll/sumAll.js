const sumAll = (num1, num2) => {
	const array = [];
	const min = Math.min(num1, num2);
	const max = Math.max(num1, num2);

	for (let i = min; i <= max; i++) {
		array.push(i);
	}

	if (
		min < 0 ||
		!Number.isInteger(min) ||
		!Number.isInteger(max) ||
		num1 === String(num1) ||
		num2 === String(num2) ||
		min !== Number(min) ||
		max !== Number(max)
	) {
		return "ERROR";
	}

	const sum = array.reduce((accumulator, item) => {
		return accumulator + item;
	});

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
