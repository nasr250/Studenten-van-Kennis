import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [boek, setBoek] = useState(null);
  const [lessen, setLessen] = useState([]);

  useEffect(() => {
    if (id) {
      supabase
        .from("boeken")
        .select("*")
        .eq("id", id)
        .single()
        .then((res) => setBoek(res.data));
      supabase
        .from("lessen")
        .select("*")
        .eq("boek_id", id)
        .order("order_num")
        .then((res) => setLessen(res.data));
    }
  }, [id]);

  if (!boek) return <p>Laden...</p>;

  return (
    <div>
      <h1>{boek.title}</h1>
      <p>{boek.description}</p>
      <a href={boek.pdf_url} target="_blank">
        📘 Download PDF
      </a>
      <h2>Lessen</h2>
      {lessen && lessen.length > 0 ? (
        <ul>
          {lessen.map((les) => (
            <li key={les.id}>
              <a href={`/lessen/${les.id}`}>{les.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Geen lessen beschikbaar</p>
      )}
    </div>
  );
}
