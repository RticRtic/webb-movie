import { faL, faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import actionLogo from "../../img/actionLogo.jpg";
import dramaLogo from "../../img/dramaLogo.jpg";
import comedyLogo from "../../img/comedyLogo.jpg";
import thrillerLogo from "../../img/thrillerLogo.jpg";
import topScoreLogo from "../../img/topScoreLogo.jpg";
import popularLogo from "../../img/popularLogo.jpg";
import baloonsLogo from "../../img/baloonsLogo.jpg";
import { apiPopular, apiTopScore, apiMovies } from "../../models/apiCatalog";

import MovieList from "./movieList";

import "../../styles/filter.css";

const Filter = () => {
  const [actionApiPages, setActionApiPages] = useState([]);
  const [movies, setMovies] = useState([]);

  const [genreActionChecked, setGenreActionChecked] = useState(false);
  const [genreDramaChecked, setGenreDramaChecked] = useState(false);
  const [genreComedyChecked, setGenreComedyChecked] = useState(false);
  const [genreThrillerChecked, setGenreThrillerChecked] = useState(false);
  const [genreFamilyChecked, setGenereFamilyChecked] = useState(false);
  const [genreTopScoreChecked, setGenreTopScoreChecked] = useState(false);
  const [genrePopularChecked, setGenrePopularChecked] = useState(false);


  const stateValueArray = [
    setGenreActionChecked,
    setGenreDramaChecked,
    setGenreComedyChecked,
    setGenreThrillerChecked,
    setGenereFamilyChecked,
    setGenreTopScoreChecked,
    setGenrePopularChecked,
  ];

  useEffect(() => {
    
  },[])

  //* Api genreNumbers
  //! 28 action
  //! 18 drama
  //! 35 comedy
  //! 53 thriller
  //! 10751 family

  const handleGenre = (input) => {
    stateValueArray.forEach(() => {
      if ("28" === input) {
        setGenreActionChecked(true);
        apiMovies(setMovies, input);

        setGenreDramaChecked(false);
        setGenreComedyChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);
      } else if ("18" === input) {
        setGenreDramaChecked(true);
        apiMovies(setMovies, input);

        setGenreActionChecked(false);
        setGenreComedyChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);
      } else if ("35" === input) {
        setGenreComedyChecked(true);
        apiMovies(setMovies, input);

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);
      } else if ("53" === input) {
        setGenreThrillerChecked(true);
        apiMovies(setMovies, input);

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreComedyChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);
      } else if ("10751" === input) {
        setGenereFamilyChecked(true);
        apiMovies(setMovies, input);

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreThrillerChecked(false);
        setGenreComedyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);
        
      } else if ("top_rated" === input) {
        setGenreTopScoreChecked(true);
        apiTopScore(setMovies, input)

      } else {
        setGenrePopularChecked(true)
        apiPopular(setMovies, input)
      }
    });
  };

  return (
    <div className="filter-component">
      <div className="filter-categories">
        <h4 className="h4-genre">
          <div className="img-container">
            <img
              src={actionLogo}
              alt="logo"
              className="actionLogo"
              onClick={() => handleGenre("28")}
              style={{ opacity: genreActionChecked ? 0.8 : 0.5 }}
             
            />
            <img
              src={dramaLogo}
              alt="logo"
              className="dramaLogo"
              //
              onClick={() => handleGenre("18")}
              style={{ opacity: genreDramaChecked ? 1 : 0.5 }}
            />
            <img
              src={comedyLogo}
              alt="logo"
              className="comedyLogo"
              onClick={() => handleGenre("35")}
              style={{ opacity: genreComedyChecked ? 1 : 0.5 }}
            />
            <img
              src={thrillerLogo}
              alt="logo"
              className="thrillerLogo"
              onClick={() => handleGenre("53")}
              style={{ opacity: genreThrillerChecked ? 1 : 0.5 }}
            />
            <img
              src={baloonsLogo}
              alt="logo"
              className="familyLogo"
              onClick={() => handleGenre("10751")}
              style={{ opacity: genreFamilyChecked ? 1 : 0.5 }}
            />
            <img
              src={topScoreLogo}
              alt="logo"
              className="topScoreLogo"
              onClick={() => handleGenre("top_rated")}
              style={{ opacity: genreTopScoreChecked ? 1 : 0.5 }}
            />
            <img
              src={popularLogo}
              alt="logo"
              className="popularLogo"
              //
              onClick={() => handleGenre("popular")}
              style={{ opacity: genrePopularChecked ? 1 : 0.5 }}
            />
          </div>
          <div className="label-action-container">
            <label className="label-action" onClick={() => handleGenre("28")}>
              Action
            </label>
          </div>

          <div className="label-drama-container">
            <label className="label-drama" onClick={() => handleGenre("18")}>
              Drama
            </label>
          </div>

          <div className="label-comedy-container">
            <label className="label-comedy" onClick={() => handleGenre("35")}>
              Comedy
            </label>
          </div>

          <div className="label-thriller-container">
            <label className="label-thriller" onClick={() => handleGenre("53")}>
              Thriller
            </label>
          </div>

          <div className="label-family-container">
            <label
              className="label-family"
              onClick={() => handleGenre("10751")}
            >
              Family
            </label>
          </div>

          <div className="label-topScore-container">
            <label
              className="label-topScore"
              onClick={() => handleGenre("top_rated")}
            >
              Top Score
            </label>
          </div>

          <div className="label-popular-container">
            <label
              className="label-popular"
              onClick={() => handleGenre("popular")}
            >
              Popular
            </label>
          </div>
        </h4>
      </div>
      <MovieList
        movieData={movies}
      />
    </div>
  );
};

export default Filter;
