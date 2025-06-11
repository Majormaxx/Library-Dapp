import { useEffect, useState } from "react";
import { fetchBooks } from "./utils/api";
import BookCard from "./components/bookCard";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchBooks();
      setBooks(data);
    }
    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Curated Book Shelf</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
