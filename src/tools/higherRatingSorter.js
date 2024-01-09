function higherRatingSorter(books) {
  const n = books.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (books[j].rating < books[j + 1].rating) {
        [books[j], books[j + 1]] = [books[j + 1], books[j]];
      }
    }
  }
  return books;
}

export default higherRatingSorter;
