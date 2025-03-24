
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (id) {
      supabase.from('books').select('*').eq('id', id).single().then(res => setBook(res.data));
      supabase.from('lessons').select('*').eq('book_id', id).order('order_num').then(res => setLessons(res.data));
    }
  }, [id]);

  if (!book) return <p>Laden...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <a href={book.pdf_url} target="_blank">📘 Download PDF</a>
      <h2>Lessen</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <a href={`/lessons/${lesson.id}`}>{lesson.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
