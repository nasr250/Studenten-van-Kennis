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
  const [stats, setStats] = useState({});
  const [topBoeken, setTopBoeken] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const [profiel, setProfiel] = useState(null);

  // Gebruiker-dashboard state
  const [voortgang, setVoortgang] = useState([]);
  const [actieveLeerpadIds, setActieveLeerpadIds] = useState([]);
  const [actieveLeerpaden, setActieveLeerpaden] = useState([]);
  const [laatsteLessen, setLaatsteLessen] = useState([]);
  const [laatsteNotities, setLaatsteNotities] = useState([]);
  const [aanbevolenLeerpaden, setAanbevolenLeerpaden] = useState([]);

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

            // --- ADMIN DASHBOARD (onveranderd) ---
            const [
              { count: usersCount },
              { count: boekenCount },
              { count: lessenCount },
            ] = await Promise.all([
              supabase.from("profielen").select("*", { count: "exact", head: true }).eq("rol", "student"),
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
              .from("profielen")
              .select("*")
              .order("created_at", { ascending: false })
              .eq("rol", "student")
              .limit(5);

            setStats({ usersCount, boekenCount, lessenCount });
            setTopBoeken(topBooks);
            setRecentUsers(newUsers);
          } else {
            // --- GEBRUIKER DASHBOARD ---
            // Profiel
            const { data: profiel } = await supabase
              .from("profielen")
              .select("kunya, voornaam")
              .eq("gebruiker_id", user.id)
              .single();
            setProfiel(profiel);

            // Voortgang (media_timestamps)
            const { data: timestamps } = await supabase
              .from("media_timestamps")
              .select("les_id, updated_at")
              .eq("gebruiker_id", user.id);

            setVoortgang(timestamps || []);

            // Actieve leerpaden (leerpad_inschrijvingen)
            const { data: inschrijvingen } = await supabase
              .from("leerpad_inschrijvingen")
              .select("leerpad_id")
              .eq("gebruiker_id", user.id);

            const leerpadIds = (inschrijvingen || []).map((i) => i.leerpad_id);
            setActieveLeerpadIds(leerpadIds);

            // Haal details van actieve leerpaden op
            let actieveLeerpadenData = [];
            if (leerpadIds.length > 0) {
              const { data: leerpaden } = await supabase
                .from("leerpad")
                .select("*")
                .in("id", leerpadIds);
              actieveLeerpadenData = leerpaden || [];
            }
            setActieveLeerpaden(actieveLeerpadenData);

            // Laatste activiteit: lessen (op basis van media_timestamps)
            let laatsteLessenData = [];
            if (timestamps && timestamps.length > 0) {
              const lesIds = timestamps
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 3)
                .map((t) => t.les_id);

              if (lesIds.length > 0) {
                const { data: lessen } = await supabase
                  .from("lessen")
                  .select("id, titel, boek_id")
                  .in("id", lesIds);
                laatsteLessenData = lessen || [];
              }
            }
            setLaatsteLessen(laatsteLessenData);

            // Laatste notities
            const { data: notities } = await supabase
              .from("les_notities")
              .select("id, notitie, updated_at, les:les_id(titel)")
              .eq("gebruiker_id", user.id)
              .order("updated_at", { ascending: false })
              .limit(3);
            setLaatsteNotities(notities || []);

            // Aanbevolen leerpaden (als gebruiker geen voortgang of inschrijvingen heeft)
            if ((timestamps?.length ?? 0) === 0 && leerpadIds.length === 0) {
              const { data: leerpaden } = await supabase
                .from("leerpad")
                .select("id, titel, beschrijving")
                .order("volgorde_nummer", { ascending: true })
                .limit(3);
              setAanbevolenLeerpaden(leerpaden || []);
            }
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
        // --- ADMIN DASHBOARD (onveranderd) ---
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
              {recentUsers?.length > 0 ? (
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
                <p>Geen nieuwe gebruikers gevonden.</p>
              )}
            </div>
          </section>
        </div>
      ) : (
        // --- GEBRUIKER DASHBOARD ---
        <div>
          {/* 1. Welkom & voortgangsoverzicht */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Assalaamoe 'alaykoem, {profiel?.kunya || profiel?.voornaam || user.email}!
            </h2>

          </section>

          {/* 2. Actieve leerpaden */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">📚 Actieve Leerpaden</h2>
            {actieveLeerpaden.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {actieveLeerpaden.map((lp) => (
                  <Card key={lp.id}>
                    <CardContent className="p-4">
                      <h3 className="font-medium">{lp.titel}</h3>
                      <p className="text-sm">{lp.beschrijving}</p>
                      <Button className="mt-3" href={`/leerpad/${lp.id}`}>
                        Bekijk leerpad
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <>
                <p>Je hebt nog geen actieve leerpaden.</p>
                {/* 4. Aanbevolen leerpaden als motivatie */}
                {aanbevolenLeerpaden.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Aanbevolen leerpaden om te starten:</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {aanbevolenLeerpaden.map((lp) => (
                        <Card key={lp.id}>
                          <CardContent className="p-4">
                            <h4 className="font-medium">{lp.titel}</h4>
                            <p className="text-sm">{lp.beschrijving}</p>
                            <Button className="mt-3" href={`/leerpad/${lp.id}`}>
                              Start dit leerpad
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </section>

          {/* 3. Laatste activiteit (lessen/notities) */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">🕒 Laatste Activiteit</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {laatsteLessen.map((les) => (
                <Card key={les.id}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{les.titel}</h3>
                    <Button className="mt-3" href={`/lessen/${les.id}`}>
                      Ga naar les
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {laatsteNotities.map((n) => (
                <Card key={n.id}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{n.les?.titel || "Onbekende les"}</h3>
                    <p className="text-sm line-clamp-3">{n.notitie}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(n.updated_at), "dd MMM yyyy")}
                    </p>
                  </CardContent>
                </Card>
              ))}
              {laatsteLessen.length === 0 && laatsteNotities.length === 0 && (
                <p>Je hebt nog geen recente lessen of notities. Begin vandaag met leren!</p>
              )}
            </div>
          </section>

          {/* 4. Aanbevolen volgende stappen (optioneel extra motivatie) */}
          {voortgang.length === 0 && actieveLeerpaden.length === 0 && aanbevolenLeerpaden.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">✨ Aanbevolen Volgende Stappen</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {aanbevolenLeerpaden.map((lp) => (
                  <Card key={lp.id}>
                    <CardContent className="p-4">
                      <h4 className="font-medium">{lp.titel}</h4>
                      <p className="text-sm">{lp.beschrijving}</p>
                      <Button className="mt-3" href={`/leerpad/${lp.id}`}>
                        Start dit leerpad
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
