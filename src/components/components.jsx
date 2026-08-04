import React from "react";

// ================= NAVBAR =================

export function Navbar({ user, onLogout }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#111",
        color: "#fff",
        position: "sticky",
        top: 0,
      }}
    >
      <h1 style={{ color: "red", fontSize: "35px" }}>NETFLIX</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="/profile" style={{ color: "white", textDecoration: "none" }}>
          Profile
        </a>

        {user && (
          <button
            onClick={onLogout}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

// ================= HERO =================

export function Hero() {
  return (
    <div
      style={{
        height: "500px",
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/9zXPnbVpaDfTniLBuc5vgXGfzAP.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "50px",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ fontSize: "55px" }}>Unlimited Movies</h1>

        <p style={{ width: "500px", marginTop: "20px" }}>
          Watch the latest movies and TV shows anytime, anywhere.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          ▶ Play
        </button>
      </div>
    </div>
  );
}

// ================= MOVIE CARD =================

export function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div
      style={{
        width: "200px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <img
        src={imageUrl}
        alt={movie.title}
        style={{
          width: "200px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3 style={{ color: "white" }}>{movie.title}</h3>

      <p style={{ color: "gray" }}>
        ⭐ {movie.vote_average}
      </p>
    </div>
  );
}

// ================= MOVIE ROW =================

export function MovieRow({ title, movies }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "white" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          overflowX: "scroll",
        }}
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

// ================= SEARCH =================

export function SearchBar({ search, setSearch }) {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Movies..."
        style={{
          width: "60%",
          padding: "12px",
          fontSize: "18px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

// ================= PROFILE CARD =================

export function ProfileCard({ user }) {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        marginTop: "50px",
      }}
    >
      <img
        src="https://i.pravatar.cc/200"
        alt=""
        style={{
          width: "150px",
          borderRadius: "50%",
        }}
      />

      <h2>{user?.displayName || "Netflix User"}</h2>

      <h3>{user?.email}</h3>
    </div>
  );
}

// ================= LOADER =================

export function Loader() {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h2>Loading...</h2>
    </div>
  );
}

// ================= FOOTER =================

export function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "gray",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <p>Netflix Clone © 2026</p>
    </footer>
  );
}