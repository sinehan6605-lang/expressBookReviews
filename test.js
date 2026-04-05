const {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
} = require('./general');

(async () => {
//   console.log("===== TASK 10: Get All Books =====");
//   console.log(await getAllBooks());

//   console.log("\n===== TASK 11: Search by ISBN =====");
//   console.log(await getBookByISBN(1));

//   console.log("\n===== TASK 12: Search by Author =====");
//   console.log(await getBooksByAuthor("Paulo Coelho"));

  console.log("\n===== TASK 13: Search by Title =====");
  console.log(await getBooksByTitle("Atomic Habits"));
})();