import { createSignal, For } from "solid-js";
import type { Book } from ".";

interface BookListProps {
  books: Book[];
}



export function BookList(props: BookListProps) {

  const totalBooks = () => props.books.length;

  return (
    <>
      <h2>My books ({totalBooks()})</h2>
      <ul>
        <For each={props.books}>
          {(book) => {
            return (
              <li>
                {book.title} ({book.author})
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}
