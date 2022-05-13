import { faMobileRetro } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import actionLogo from "../../img/actionLogo.jpg";
import dramaLogo from "../../img/dramaLogo.jpg";
import comedyLogo from "../../img/comedyLogo.jpg";
import thrillerLogo from "../../img/thrillerLogo.jpg";
import topScoreLogo from "../../img/topScoreLogo.jpg"
import popularLogo from "../../img/popularLogo.jpg";
import baloonsLogo from "../../img/baloonsLogo.jpg";
import {
  apiPopular,
  apiTopScore,
  apiMovies
} from "../../models/apiCatalog";

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
  
  const [topScoreMovies, setTopScoreMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
 
  
  const stateValueArray = [
    setGenreActionChecked,
    setGenreDramaChecked,
    setGenreComedyChecked,
    setGenreThrillerChecked,
    setGenereFamilyChecked

  ];

//* Api genreNumbers
//! 28 action
//! 18 drama
//! 35 comedy
//! 53 thriller
//! 10751 family

  
  const handleGenre = (inputNumber) => {
    apiMovies(setMovies, inputNumber); 

  } 

  // const checkValueInGenreStateTopScore = () => {
  //   stateValueArray.forEach((state) => {
  //     if(!state.genreTopScoreChecked) {
  //       setGenreTopScoreChecked(true);
  //       apiTopScore(setTopScoreMovies)

  //       setGenreActionChecked(false);
  //       setGenreDramaChecked(false);
  //       setGenreComedyChecked(false);
  //       setGenreThrillerChecked(false);
  //       setGenereFamilyChecked(false);
  //       setGenrePopularChecked(false);

  //       setActionMovies([]);
  //       setDramaMovies([]);
  //       setComedyMovies([]);
  //       setThrillerMovies([]);
  //       setFamilyMovies([])
  //       setPopularMovies([]);
  //     } 
      
  //   })
   
  // }

  


  

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
              style={{opacity : genreActionChecked ? 0.8 : 0.5}}
              
            />
            <img
              src={dramaLogo}
              alt="logo"
              className="dramaLogo"
              // 
              onClick={() => handleGenre("18")}
              style={{opacity : genreDramaChecked ? 1 : 0.5}}
            />
            <img
              src={comedyLogo}
              alt="logo"
              className="comedyLogo"
              onClick={() => handleGenre("35")}
              style={{opacity : genreComedyChecked ? 1 : 0.5}}
            />
             <img
              src={thrillerLogo}
              alt="logo"
              className="thrillerLogo"
              onClick={() => handleGenre("53")}
              style={{opacity : genreThrillerChecked ? 1 : 0.5}}
            />
            <img
              src={baloonsLogo}
              alt="logo"
              className="familyLogo"
              onClick={() => handleGenre("10751")}
              style={{opacity : genreFamilyChecked ? 1 : 0.5}}
            />
            <img
              src={topScoreLogo}
              alt="logo"
              className="topScoreLogo"
              onClick={() => apiTopScore(setTopScoreMovies)}
              style={{opacity : genreTopScoreChecked ? 1 : 0.5}}
              
            />
            <img
              src={popularLogo}
              alt="logo"
              className="popularLogo"
              // 
              onClick={() => apiPopular(setPopularMovies)}  
              style={{opacity : genrePopularChecked ? 1 : 0.5}}
            />

          </div>
          <div className="label-action-container">
            <label className="label-action"
             onClick={() => handleGenre("28")}>Action</label>
          </div>

          <div className="label-drama-container">
            <label className="label-drama"
             onClick={() => handleGenre("18")}>Drama</label>
          </div>

          <div className="label-comedy-container">
            <label className="label-comedy" 
             onClick={() => handleGenre("35")}>Comedy</label>
          </div>

          <div className="label-thriller-container">
            <label className="label-thriller"
             onClick={() => handleGenre("53")}>Thriller</label>
          </div>

          <div className="label-family-container">
            <label className="label-family"
             onClick={() => handleGenre("10751")}>Family</label>
          </div>

          <div className="label-topScore-container">
            <label className="label-topScore"
             onClick={() => apiTopScore(setTopScoreMovies)}>Top Score</label>
             
          </div>

          <div className="label-popular-container">
            <label className="label-popular"
             onClick={() => apiPopular(setPopularMovies)}>Popular</label>
             
          </div> 
        </h4>

        
      </div>
      <MovieList
        movieData = {movies}
        topScoreMovieData={topScoreMovies}
        popularMovieData={popularMovies}
       
      />
    </div>
  );
};

export default Filter;
