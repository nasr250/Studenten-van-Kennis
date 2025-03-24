
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    supabase.from('books').select('*').then(({ data }) => {
      setBooks(data);
    });
  }, []);

  return (
    <div>
      <h1>Boekenoverzicht</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <a href={`/books/${book.id}`}>{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
