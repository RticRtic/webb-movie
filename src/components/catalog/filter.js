import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";

import { apiAction,
         apiDrama,
         apiComedy,
         apiThriller,
         apiFamily,
         apiPopular,
         apiTopScore } from "../../models/apiCatalog";

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
  }

  const handleGenreComedy = () => {
    if(!genreComedyChecked) {
      setGenreComedyChecked(true)
      apiComedy(setComedyMovies)
    } else {
      setGenreComedyChecked(false)
      setComedyMovies([]);
    }
  }

  const handleGenreThriller = () => {
    if(!genreThrillerChecked) {
      setGenreThrillerChecked(true);
      apiThriller(setThrillerMovies)
      
    } else {
      setGenreThrillerChecked(false)
      setThrillerMovies([]);
    }
  }

  const handleGenreFamily = () => {
    if(!genreFamilyChecked) {
      setGenereFamilyChecked(true);
      apiFamily(setFamilyMovies)
    } else {
      setGenereFamilyChecked(false);
      setFamilyMovies([]);
    }
  }

  const handleGenrePopular = () => {
    if(!genrePopularChecked) {
        setGenrePopularChecked(true);
        apiPopular(setPopularMovies)
    } else {
      setGenrePopularChecked(false);
      setPopularMovies([]);
    }
  }

  const handleGenreTopScore = () => {
    if(!genreTopScoreChecked) {
        setGenreTopScoreChecked(true);
        apiTopScore(setTopScoreMovies);
    } else {
      setGenreTopScoreChecked(false);
      setTopScoreMovies([]);
    }
  }
  
  return (
    <div className="filter-component">
      <div className="text-filter">
        <header>Filter</header>
      </div>
      <div className="filter-categories">
      
        <h4 className="h4-genre">
          Genre <br />
          <input
            className="action-checkbox"
            type="checkbox"
            checked={genreActionChecked}
            onChange={handleGenreAction}
          />
          <label className="label-action">Action</label> <br />


          <input className="drama-checkbox"
           type="checkbox" 
           checked={genreDramaChecked}
           onChange={handleGenreDrama}/>
          <label>Drama</label> <br />

          
          <input className="comedy-checkbox"
           type="checkbox"
           checked={genreComedyChecked}
           onChange={handleGenreComedy} />
          <label>Comedy</label> <br />


          <input className="thriller-checkbox"
           type="checkbox"
           checked={genreThrillerChecked}
           onChange={handleGenreThriller} />
          <label>Thriller</label> <br />


          <input className="family-checkbox"
           type="checkbox"
           checked={genreFamilyChecked}
           onChange={handleGenreFamily} />
          <label>Family</label>


        </h4>
        
        <input className="score-checkbox" 
         type="checkbox"
         checked={genreTopScoreChecked}
         onChange={handleGenreTopScore} />
        <label>Score</label> <br />


        <input className="popular-checkbox"
         type="checkbox"
         checked={genrePopularChecked}
         onChange={handleGenrePopular} />
        <label>Popularity</label> <br />

        <div className="header-title-cotainer">
          <h3 className="header-title-action">{genreActionChecked ? "ACTION" : ""}</h3>
          <h3 className="header-title-drama">{genreDramaChecked ? "DRAMA" : ""}</h3>
          <h3 className="header-title-comedy">{genreComedyChecked ? "COMEDY" : ""}</h3>
          <h3 className="header-title-thriller">{genreThrillerChecked ? "THRILLER" : ""}</h3>
          <h3 className="header-title-family">{genreFamilyChecked ? "FAMILY" : ""}</h3>
        </div>

      </div>
      <MovieList 
       actionMovieData={actionMovies}
       dramaMovieData={dramaMovies}
       comedyMovieData={comedyMovies}
       thrillerMovieData={thrillerMovies}
       familyMovieData={familyMovies}
       topScoreMovieData={topScoreMovies}
       popularMovieData={popularMovies}/>
      
    </div>
  );
};

export default Filter;
