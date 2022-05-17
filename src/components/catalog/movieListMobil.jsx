import { useEffect, useState } from "react";
import { apiMovies, apiTopScoreOrPopular } from "../../models/apiCatalog";
import "../../styles/movielist-mobil.css";

const MovieListMobil = () => {
  const [mobilMovies, setMobilMovies] = useState([]);

  useEffect(() => {
    apiTopScoreOrPopular(setMobilMovies, "top_rated");
  }, []);

  const movies = mobilMovies.map((movie) => (
    <div key={movie.id} className="movielistMobil-component">


      <div className="top-rated-container">
        <h2 className="toprated">Top Rated</h2>
      </div>

      <div className="moviecard-container">
        <div className="img-container">
          <img
            className="img"
            src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            alt="img"
          />
          <div className="img-backdrop-patch-container"></div>
          <img className="img-backdrop-path" src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="img" />
        </div>
      </div>
    </div>
  ));

  return <div>{movies}</div>;
};

export default MovieListMobil;
