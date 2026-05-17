const getTheTitles = function(books) {
  const container = [];

  for (const book of books) {
    container.push(book.title);
  }

  return container;
};

// Do not edit below this line
module.exports = getTheTitles;
