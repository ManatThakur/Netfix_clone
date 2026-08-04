import { useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  Hero,
  MovieRow,
  SearchBar,
  Footer,
  Loader,
} from "../components/components";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      setError("");

      

      try {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const response = await axios.get(url);

        if (Array.isArray(response.data?.results) && response.data.results.length) {
          setMovies(response.data.results);
        } else {
          setError("TMDB returned no movie results.");
          setMovies(fallbackMovies);
        }
      } catch (fetchError) {
        const status = fetchError.response?.status;
        const message =
          status === 401
            ? "TMDB API unauthorized. Check your API key."
            : fetchError.message || "Failed to load movies.";

        setError(message);
        
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? (
        <Loader />
      ) : error ? (
        <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
          {error}
        </div>
      ) : (
        <MovieRow title="Trending Movies" movies={filteredMovies} />
      )}
      <Footer />
    </>
  );
}

export default Home;
