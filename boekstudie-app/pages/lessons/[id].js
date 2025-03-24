
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;

  const [lesson, setLesson] = useState(null);
  const [note, setNote] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    if (id) {
      supabase.from('lessons').select('*').eq('id', id).single().then(res => setLesson(res.data));
    }
  }, [id]);

  const saveNote = async () => {
    await supabase.from('notes').upsert({
      user_id: user.id,
      lesson_id: id,
      content: note
    });
    alert('Notitie opgeslagen!');
  };

  if (!lesson) return <p>Laden...</p>;

  return (
    <div>
      <h1>{lesson.title}</h1>
      <iframe width="100%" height="315" src={lesson.video_url} allowFullScreen />
      <textarea
        placeholder="Jouw notitie"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-2 border mt-4"
      />
      <button onClick={saveNote} className="mt-2 px-4 py-2 bg-blue-600 text-white">Opslaan</button>
    </div>
  );
}
