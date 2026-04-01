const removeFromArray = (arr, ...number) => {
	const filtered = arr.filter((item) => {
		return !number.includes(item);
	});

	return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
