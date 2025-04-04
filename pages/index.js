import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import styles from "../styles/Home.module.css";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";
import { format } from "date-fns";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [boeken, setBoeken] = useState([]);
  const [toetsen, setToetsen] = useState([]);
  const [notities, setNotities] = useState([]);
  const [stats, setStats] = useState({});
  const [topBoeken, setTopBoeken] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]); // Ensure recentUsers is initialized as an empty array
  const router = useRouter();

  useEffect(() => {
    const checkUserAndRole = async () => {
      try {
        // Get the current authenticated user
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          // Fetch the user's role from the 'admins' table
          const { data: adminData } = await supabase
            .from("admins")
            .select("*")
            .eq("user_id", user.id)
            .single();

          if (adminData) {
            setIsAdmin(true);

            // Fetch admin-specific data
            const [
              { count: usersCount },
              { count: boekenCount },
              { count: lessenCount },
            ] = await Promise.all([
              supabase.from("users").select("*", { count: "exact", head: true }),
              supabase.from("boeken").select("*", { count: "exact", head: true }),
              supabase.from("lessen").select("*", { count: "exact", head: true }),
            ]);

            const { data: voortgangData } = await supabase
              .from("voortgang")
              .select("boek_id, boek:boek_id(titel)");

            // Group data by boek_id and count occurrences
            const groupedBooks = voortgangData.reduce((acc, item) => {
              const boekId = item.boek_id;
              if (!acc[boekId]) {
                acc[boekId] = { boek_id: boekId, boek: item.boek, count: 0 };
              }
              acc[boekId].count += 1;
              return acc;
            }, {});

            const topBooks = Object.values(groupedBooks)
              .sort((a, b) => b.count - a.count)
              .slice(0, 5);

            const { data: newUsers } = await supabase
              .from("users")
              .select("*")
              .order("created_at", { ascending: false })
              .limit(5);

            setStats({ usersCount, boekenCount, lessenCount });
            setTopBoeken(topBooks);
            setRecentUsers(newUsers);
          } else {
            // Fetch dashboard data for non-admin users
            const { data: voortgang } = await supabase
              .from("voortgang")
              .select("*, boek:boek_id(*)")
              .eq("gebruiker_id", user.id);

            const { data: toetsResultaten } = await supabase
              .from("toets_resultaten")
              .select("*, toets:toets_id(titel, type)")
              .eq("gebruiker_id", user.id)
              .order("voltooid_op", { ascending: false })
              .limit(5);

            const { data: gebruikersNotities } = await supabase
              .from("notities")
              .select("*, les:les_id(titel)")
              .eq("gebruiker_id", user.id)
              .order("updated_at", { ascending: false })
              .limit(5);

            setBoeken(voortgang);
            setToetsen(toetsResultaten);
            setNotities(gebruikersNotities);
          }

          setUser(user);
        } else {
          // Redirect to login if no user is authenticated
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserAndRole();
  }, [router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // If no user, redirect to login (this should not typically happen due to the useEffect)
  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      {isAdmin ? (
        <div>
          <h1 >🛠️ Admin Dashboard</h1>

          <section className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <h3>👥 Gebruikers</h3>
                <p >{stats.usersCount}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3>📚 Boeken</h3>
                <p >{stats.boekenCount}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3>🎧 Lessen</h3>
                <p className="text-2xl">{stats.lessenCount}</p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6 mb-2">🔥 Populaire Boeken</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {topBoeken.map((b) => (
                <Card key={b.boek_id}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{b.boek.titel}</h3>
                    <p className="text-sm text-muted-foreground">
                      Gebruikers: {b.count}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6 mb-2">🆕 Nieuwe Gebruikers</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {recentUsers?.length > 0 ? ( // Add a fallback check
                recentUsers.map((u) => (
                  <Card key={u.id}>
                    <CardContent className="p-4">
                      <h3 className="font-medium">{u.email}</h3>
                      <p className="text-sm text-muted-foreground">
                        Aangemaakt op {format(new Date(u.created_at), "dd MMM yyyy")}
                      </p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p>Geen nieuwe gebruikers gevonden.</p> // Fallback message
              )}
            </div>
          </section>
        </div>
      ) : (
        <div>
          <h1>📚 Mijn Dashboard</h1>

          <section>
            <h2 className="text-xl font-semibold mb-2">📖 Mijn Boeken</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {boeken.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium">{item.boek.titel}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.voltooide_eindtoets
                        ? "✅ Eindtoets voltooid"
                        : "📚 Bezig met leren"}
                    </p>
                    <Progress
                      value={
                        (item.voltooide_lessons.length /
                          item.boek.aantal_lessons) *
                        100
                      }
                    />
                    <Button className="mt-3" href={`/boek/${item.boek.id}`}>
                      Ga verder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">🧠 Laatste Toetsen</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {toetsen.map((toets) => (
                <Card key={toets.id}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{toets.toets.titel}</h3>
                    <p className="text-sm">
                      Score: {toets.score} / {toets.totaal_vragen}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(toets.voltooid_op), "dd MMM yyyy")}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">📝 Mijn Notities</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {notities.map((n) => (
                <Card key={n.id}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{n.les.titel}</h3>
                    <p className="text-sm line-clamp-3">{n.inhoud}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
