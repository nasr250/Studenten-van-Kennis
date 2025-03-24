import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [boeken, setBoeken] = useState([]);

  useEffect(() => {
    supabase
      .from("boeken")
      .select("*")
      .then(({ data }) => {
        setBoeken(data);
      });
  }, []);

  return (
    <div>
      <h1>Boekenoverzicht</h1>
      <ul>
        {boeken.map((boek) => (
          <li key={boek.id}>
            <a href={`/boeken/${boek.id}`}>{boek.titel}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
