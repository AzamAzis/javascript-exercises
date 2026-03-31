const repeatString = (strings, number) => {
	let words = "";

	if (number >= 0) {
		for (let i = 0; i < number; i++) {
			words += strings;
		}
	} else {
		words = "ERROR";
	}

	return words;
};

// Do not edit below this line
module.exports = repeatString;
