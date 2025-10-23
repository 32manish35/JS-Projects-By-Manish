const books = [
  {
    title: "Clean Code",
    authorName: "Robert C. Martin",
    releaseYear: 2008,
  },
  {
    title: "The Pragmatic Programmer",
    authorName: "Andrew Hunt and David Thomas",
    releaseYear: 1999,
  },
  {
    title: "You Don't Know JS Yet",
    authorName: "Kyle Simpson",
    releaseYear: 2020,
  },
  {
    title: "The Mythical Man-Month",
    authorName: "Fred Brooks",
    releaseYear: 1975,
  },
  {
    title: "Design Patterns",
    authorName: "Erich Gamma et al.",
    releaseYear: 1994,
  },
  {
    title: "How to Win Friends and Influence People",
    authorName: "Dale Carnegie",
    releaseYear: 1936,
  },
  {
    title: "The Art of War",
    authorName: "Sun Tzu",
    releaseYear: -500,
  },
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1; 
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
};


let filteredBooks = books.filter(book => book.releaseYear < 1950);


filteredBooks.sort(sortByYear);

console.log("📚 Filtered and Sorted Books (before 1950):");
filteredBooks.forEach(book => {
  console.log(`${book.title} — ${book.authorName} (${book.releaseYear})`);
});
