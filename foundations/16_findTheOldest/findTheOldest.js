const findTheOldest = function (people) {
	const groupOfPeople = people.reduce((array, object) => {
		const live = !object.yearOfDeath
			? new Date().getFullYear()
			: object.yearOfDeath;

		const newObject = {
			name: object.name,
			age: live - object.yearOfBirth,
		};

		array.push(newObject);

		const sortPeople = array.sort((a, b) => {
			return b.age - a.age;
		});

		return sortPeople;
	}, []);

	return groupOfPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
