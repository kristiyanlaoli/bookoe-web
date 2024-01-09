function newestBooksSorter(books) {
  const n = books.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (new Date(books[j].created_at) < new Date(books[j + 1].created_at)) {
        [books[j], books[j + 1]] = [books[j + 1], books[j]];
      }
    }
  }
  return books;
}

export default newestBooksSorter;
