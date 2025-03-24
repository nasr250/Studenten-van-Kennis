import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;

  const [les, setLes] = useState(null);
  const [notitie, setNotitie] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    if (id) {
      supabase
        .from("lessen")
        .select("*")
        .eq("id", id)
        .single()
        .then((res) => setLes(res.data));
    }
  }, [id]);

  const saveNotitie = async () => {
    await supabase.from("notities").upsert({
      user_id: user.id,
      les_id: id,
      content: notitie,
    });
    alert("Notitie opgeslagen!");
  };

  if (!les) return <p>Laden...</p>;

  return (
    <div>
      <h1>{les.title}</h1>
      <iframe width="100%" height="315" src={les.video_url} allowFullScreen />
      <textarea
        placeholder="Jouw notitie"
        value={notitie}
        onChange={(e) => setNotitie(e.target.value)}
        className="w-full p-2 border mt-4"
      />
      <button
        onClick={saveNotitie}
        className="mt-2 px-4 py-2 bg-blue-600 text-white"
      >
        Opslaan
      </button>
    </div>
  );
}
