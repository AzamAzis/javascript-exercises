const palindromes = (words) => {
	const input = words.toLowerCase().replace(/[^a-z0-9]/gi, "");
	const output = input.split("").reverse().join("");

	return input === output;
};

// Do not edit below this line
module.exports = palindromes;
