import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import actionLogo from "../../img/actionLogo.jpg";
import dramaLogo from "../../img/dramaLogo.jpg";
import comedyLogo from "../../img/comedyLogo.jpg";
import thrillerLogo from "../../img/thrillerLogo.jpg";
import familyLogo from "../../img/familyLogo.jpg";
import {
  apiAction,
  apiDrama,
  apiComedy,
  apiThriller,
  apiFamily,
  apiPopular,
  apiTopScore,
} from "../../models/apiCatalog";

import MovieList from "./movieList";

import "../../styles/filter.css";

const Filter = () => {
  const [genreActionChecked, setGenreActionChecked] = useState(false);
  const [genreDramaChecked, setGenreDramaChecked] = useState(false);
  const [genreComedyChecked, setGenreComedyChecked] = useState(false);
  const [genreThrillerChecked, setGenreThrillerChecked] = useState(false);
  const [genreFamilyChecked, setGenereFamilyChecked] = useState(false);
  const [genrePopularChecked, setGenrePopularChecked] = useState(false);
  const [genreTopScoreChecked, setGenreTopScoreChecked] = useState(false);

  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topScoreMovies, setTopScoreMovies] = useState([]);

  const handleGenreAction = () => {
    if (!genreActionChecked) {
      setGenreActionChecked(true);
      apiAction(setActionMovies);
    } else {
      setGenreActionChecked(false);
      setActionMovies([]);
    }
  };

  const handleGenreDrama = () => {
    if (!genreDramaChecked) {
      setGenreDramaChecked(true);
      apiDrama(setDramaMovies);
    } else {
      setGenreDramaChecked(false);
      setDramaMovies([]);
    }
  };

  const handleGenreComedy = () => {
    if (!genreComedyChecked) {
      setGenreComedyChecked(true);
      apiComedy(setComedyMovies);
    } else {
      setGenreComedyChecked(false);
      setComedyMovies([]);
    }
  };

  const handleGenreThriller = () => {
    if (!genreThrillerChecked) {
      setGenreThrillerChecked(true);
      apiThriller(setThrillerMovies);
    } else {
      setGenreThrillerChecked(false);
      setThrillerMovies([]);
    }
  };

  const handleGenreFamily = () => {
    if (!genreFamilyChecked) {
      setGenereFamilyChecked(true);
      apiFamily(setFamilyMovies);
    } else {
      setGenereFamilyChecked(false);
      setFamilyMovies([]);
    }
  };

  const handleGenrePopular = () => {
    if (!genrePopularChecked) {
      setGenrePopularChecked(true);
      apiPopular(setPopularMovies);
    } else {
      setGenrePopularChecked(false);
      setPopularMovies([]);
    }
  };

  const handleGenreTopScore = () => {
    if (!genreTopScoreChecked) {
      setGenreTopScoreChecked(true);
      apiTopScore(setTopScoreMovies);
    } else {
      setGenreTopScoreChecked(false);
      setTopScoreMovies([]);
    }
  };

  return (
    <div className="filter-component">
      {/* <div className="text-filter">
        <header>Filter</header>
      </div> */}


      <div className="filter-categories">
        <h4 className="h4-genre">
          
          <div className="img-container">
            <img
              src={actionLogo}
              alt="logo"
              className="actionLogo"
              onClick={handleGenreAction ? handleGenreAction : null}
            />
            <img
              src={dramaLogo}
              alt="logo"
              className="dramaLogo"
              onClick={handleGenreDrama ? handleGenreDrama : null}
            />
            <img
              src={comedyLogo}
              alt="logo"
              className="comedyLogo"
              onClick={handleGenreComedy ? handleGenreComedy : null}
            />
             <img
              src={thrillerLogo}
              alt="logo"
              className="thrillerLogo"
              onClick={handleGenreComedy ? handleGenreComedy : null}
            />
            <img
              src={familyLogo}
              alt="logo"
              className="familyLogo"
              onClick={handleGenreFamily ? handleGenreFamily : null}
            />
          </div>
          <div className="label-action-container">
            <label className="label-action"
             onClick={handleGenreAction ? handleGenreAction : null}>Action</label>
          </div>

          <div className="label-drama-container">
            <label className="label-drama"
             onClick={handleGenreDrama ? handleGenreDrama : null}>Drama</label>
          </div>

          <div className="label-comedy-container">
            <label className="label-comedy" 
             onClick={handleGenreComedy ? handleGenreComedy : null}>Comedy</label>
          </div>

          <div className="label-thriller-container">
            <label className="label-thriller"
             onClick={handleGenreThriller ? handleGenreThriller : null}>Thriller</label>
          </div>

          <div className="label-family-container">
            <label className="label-family"
             onClick={handleGenreFamily ? handleGenreFamily : null}>Family</label>
          </div>
          <div className="score-popular-container">
          <input
          className="score-checkbox"
          type="checkbox"
          checked={genreTopScoreChecked}
          onChange={handleGenreTopScore}
        />
        <label>Score</label> <br />
        <input
          className="popular-checkbox"
          type="checkbox"
          checked={genrePopularChecked}
          onChange={handleGenrePopular}
        />
        <label>Popularity</label> <br />

            
          </div>
          
        </h4>

        
      </div>
      <MovieList
        actionMovieData={actionMovies}
        dramaMovieData={dramaMovies}
        comedyMovieData={comedyMovies}
        thrillerMovieData={thrillerMovies}
        familyMovieData={familyMovies}
        topScoreMovieData={topScoreMovies}
        popularMovieData={popularMovies}
      />
    </div>
  );
};

export default Filter;
