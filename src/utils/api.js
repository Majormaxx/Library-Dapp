const subjects = [
  "self_help",
  "business",
  "technology",
  "programming",
  "biographies",
  "computers",
  "blockchain"
];

export async function fetchBooks() {
  const limitPerCategory = 3;
  const allBooks = [];

  for (const subject of subjects) {
    const res = await fetch(
      `https://openlibrary.org/subjects/${subject}.json?limit=${limitPerCategory}`
    );
    const data = await res.json();
    const books = data.works.map((book) => ({
      id: book.key,
      title: book.title,
      img: book.cover_id
        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
        : "https://via.placeholder.com/150x200?text=No+Cover",
    }));
    allBooks.push(...books);
  }

  return allBooks;
}
