"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("movie");
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(null);

  useEffect(() => {
    const s = localStorage.getItem("qm");
    if (s) { try { setMovies(JSON.parse(s)); } catch {} }
  }, []);

  function save(list) {
    setMovies(list);
    localStorage.setItem("qm", JSON.stringify(list));
  }

  function add() {
    if (!title) { alert("Enter title"); return; }
    const m = {
      id: Date.now(),
      title: title,
      type: type,
      img: "https://picsum.photos/seed/" + Date.now() + "/400/600",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    };
    save([m].concat(movies));
    setShow(false);
    setTitle("");
    alert("POSTED: " + m.title);
  }

  const live = movies.filter((m) => m.type === "live");
  const mov = movies.filter((m) => m.type === "movie");

  return (
    <div style={{ background: "#070A14", color: "white", minHeight: "100vh", paddingBottom: 80 }}>
      <div style={{ padding: 15, borderBottom: "1px solid #222", display: "flex", justifyContent: "space-between" }}>
        <b style={{ color: "#FFC91A" }}>QURAISHMINO - EMPTY CHANNEL</b>
        <button onClick={() => setShow(true)} style={{ background: "#FFC91A", color: "black", padding: "6px 12px", borderRadius: 20, fontWeight: "bold" }}>+ POST</button>
      </div>

      {play && (
        <div style={{ position: "fixed", inset: 0, background: "black", zIndex: 99, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: 15, display: "flex", justifyContent: "space-between" }}><b>{play.title}</b><button onClick={() => setPlay(null)}>X</button></div>
          <video controls autoPlay src={play.video} style={{ width: "100%", flex: 1 }}></video>
        </div>
      )}

      {show && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div style={{ background: "#11182D", padding: 20, borderRadius: 15, width: 320 }}>
            <h3 style={{ color: "#FFC91A" }}>Post Your Movie / Live</h3>
            <p style={{ fontSize: 12, color: "#888" }}>No Mayday - Only yours</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ width: "100%", padding: 10, marginTop: 10, borderRadius: 8, background: "black", color: "white", border: "1px solid #333" }} />
            <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: "100%", padding: 10, marginTop: 10, borderRadius: 8, background: "black", color: "white" }}>
              <option value="movie">Movie</option>
              <option value="live">Live TV</option>
              <option value="series">Series</option>
            </select>
            <button onClick={add} style={{ width: "100%", marginTop: 15, background: "#FFC91A", color: "black", padding: 12, borderRadius: 8, fontWeight: "bold" }}>POST NOW</button>
            <button onClick={() => setShow(false)} style={{ width: "100%", marginTop: 10, color: "#666", background: "none", border: "none" }}>Cancel</button>
          </div>
        </div>
      )}

      {movies.length === 0? (
        <div style={{ textAlign: "center", padding: 50 }}>
          <div style={{ fontSize: 50 }}>🎬</div>
          <h2>Channel Empty</h2>
          <p style={{ color: "#666", fontSize: 13 }}>No Mayday, No Moana. Only your posts will show here.</p>
          <button onClick={() => setShow(true)} style={{ marginTop: 20, background: "#FFC91A", color: "black", padding: "12px 24px", borderRadius: 25, fontWeight: "bold", border: "none" }}>+ POST YOUR FIRST MOVIE / LIVE</button>
          <div style={{ marginTop: 30, background: "#11182D", padding: 15, borderRadius: 12, textAlign: "left" }}>
            <div style={{ fontSize: 12, color: "#888" }}>PAYMENT NUMBERS</div>
            <div style={{ color: "#FFC91A", fontWeight: "bold" }}>MTN: 0761388814</div>
            <div style={{ fontWeight: "bold" }}>Airtel: 0741094332</div>
          </div>
        </div>
      ) : (
        <div style={{ padding: 15 }}>
          <h3>🔴 Live: {live.length} | 🎬 Movies: {mov.length}</h3>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", marginTop: 10 }}>
            {movies.map((m) => (
              <div key={m.id} onClick={() => setPlay(m)} style={{ minWidth: 120, background: "#11182D", borderRadius: 10, overflow: "hidden" }}>
                <div style={{ height: 150, background: "#222", display: "flex", alignItems: "center", justifyContent: "center" }}>▶</div>
                <div style={{ padding: 8, fontSize: 12 }}>{m.title} - {m.type}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
