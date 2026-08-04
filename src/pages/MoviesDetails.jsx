import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );

      setMovie(response.data);
    }

    getMovie();
  }, [id]);

  if (!movie) {
    return (
      <h2 style={{ color: "white", textAlign: "center" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "300px",
          borderRadius: "10px",
        }}
      />

      <h1>{movie.title}</h1>

      <p>
        ⭐ {movie.vote_average}
      </p>

      <p>
        Release Date: {movie.release_date}
      </p>

      <p>{movie.overview}</p>

      <h3>Genres</h3>

      {movie.genres.map((genre) => (
        <span
          key={genre.id}
          style={{
            background: "red",
            padding: "8px 15px",
            marginRight: "10px",
            borderRadius: "20px",
          }}
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
}

export default MovieDetails;