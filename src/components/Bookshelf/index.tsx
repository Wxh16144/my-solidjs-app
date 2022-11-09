import { createSignal } from 'solid-js';
import { AddBook } from './AddBook';
import { BookList } from './BookList';

export type Book = {
  title: string;
  author: string;
};

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

interface BookshelfProps {
  name: string;
}

export function Bookshelf(props: BookshelfProps) {
  const [books, setBooks] = createSignal(initialBooks);

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
}
