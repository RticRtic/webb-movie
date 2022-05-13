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
  apiAction,
  apiDrama,
  apiComedy,
  apiThriller,
  apiFamily,
  apiPopular,
  apiTopScore,
  apiActionPageAdder
} from "../../models/apiCatalog";

import MovieList from "./movieList";

import "../../styles/filter.css";

const Filter = () => {

  const [actionApiPages, setActionApiPages] = useState([]);

  const [genreActionChecked, setGenreActionChecked] = useState(false);
  const [genreDramaChecked, setGenreDramaChecked] = useState(false);
  const [genreComedyChecked, setGenreComedyChecked] = useState(false);
  const [genreThrillerChecked, setGenreThrillerChecked] = useState(false);
  const [genreFamilyChecked, setGenereFamilyChecked] = useState(false);
  const [genreTopScoreChecked, setGenreTopScoreChecked] = useState(false);
  const [genrePopularChecked, setGenrePopularChecked] = useState(false);
  

  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [topScoreMovies, setTopScoreMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
 
// useEffect(() => {
//   apiActionPageAdder();
// },[])
  
  const stateValueArray = [
    setGenreActionChecked,
    setGenreDramaChecked,
    setGenreComedyChecked,
    setGenreThrillerChecked,
    setGenereFamilyChecked

  ];

  const checkValueInGenreStateAction = () => {
    stateValueArray.forEach((state) => {
      if(!state.genreActionChecked) {
        setGenreActionChecked(true);
        apiAction(setActionMovies)

        setGenreDramaChecked(false);
        setGenreComedyChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);

        setDramaMovies([]);
        setComedyMovies([]);
        setThrillerMovies([]);
        setFamilyMovies([]);
        setTopScoreMovies([]);
        setPopularMovies([]);

      } 
      
    })
   
  }

  const checkValueInGenreStateDrama = () => {
    stateValueArray.forEach((state) => {
      if(!state.genreDramaChecked) {
        setGenreDramaChecked(true);
        apiDrama(setDramaMovies)

        setGenreActionChecked(false);
        setGenreComedyChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);

        setActionMovies([]);
        setComedyMovies([]);
        setThrillerMovies([]);
        setFamilyMovies([]);
        setTopScoreMovies([]);
        setPopularMovies([]);
      } 
      
    })
   
  }

  const checkValueInGenreStateComedy = () => {
    stateValueArray.forEach((state) => {
      if(!state.genreComedyChecked) {
        setGenreComedyChecked(true);
        apiComedy(setComedyMovies)

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);

        setActionMovies([]);
        setDramaMovies([]);
        setThrillerMovies([]);
        setFamilyMovies([]);
        setTopScoreMovies([]);
        setPopularMovies([]);
      } 
      
    })
   
  }

  const checkValueInGenreStateThriller = () => {
    stateValueArray.forEach((state) => {
      if(!state.genreThrillerChecked) {
        setGenreThrillerChecked(true);
        apiThriller(setThrillerMovies)

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreComedyChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);

        setActionMovies([]);
        setDramaMovies([]);
        setComedyMovies([]);
        setFamilyMovies([]);
        setTopScoreMovies([]);
        setPopularMovies([]);
      } 
      
    })
   
  }

  const checkValueInGenreStateFamily = () => {
    stateValueArray.forEach((state) => {
      if(!state.genreFamilyChecked) {
        setGenereFamilyChecked(true);
        apiFamily(setFamilyMovies)

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreComedyChecked(false);
        setGenreThrillerChecked(false);
        setGenreTopScoreChecked(false);
        setGenrePopularChecked(false);

        setActionMovies([]);
        setDramaMovies([]);
        setComedyMovies([]);
        setThrillerMovies([]);
        setTopScoreMovies([]);
        setPopularMovies([]);
      } 
      
    })
   
  }

  const checkValueInGenreStateTopScore = () => {
    stateValueArray.forEach((state) => {
      if(!state.genreTopScoreChecked) {
        setGenreTopScoreChecked(true);
        apiTopScore(setTopScoreMovies)

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreComedyChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenrePopularChecked(false);

        setActionMovies([]);
        setDramaMovies([]);
        setComedyMovies([]);
        setThrillerMovies([]);
        setFamilyMovies([])
        setPopularMovies([]);
      } 
      
    })
   
  }

  const checkValueInGenreStatePopular = () => {
    stateValueArray.forEach((state) => {
      if(!state.genrePopularChecked) {
        setGenrePopularChecked(true);
        apiPopular(setPopularMovies)

        setGenreActionChecked(false);
        setGenreDramaChecked(false);
        setGenreComedyChecked(false);
        setGenreThrillerChecked(false);
        setGenereFamilyChecked(false);
        setGenreTopScoreChecked(false);

        setActionMovies([]);
        setDramaMovies([]);
        setComedyMovies([]);
        setThrillerMovies([]);
        setFamilyMovies([])
        setTopScoreMovies([]);
      } 
      
    })
   
  }


  

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
              // 
              onClick={checkValueInGenreStateAction}
              style={{opacity : genreActionChecked ? 0.8 : 0.5}}
              
            />
            <img
              src={dramaLogo}
              alt="logo"
              className="dramaLogo"
              // 
              onClick={checkValueInGenreStateDrama}
              style={{opacity : genreDramaChecked ? 1 : 0.5}}
            />
            <img
              src={comedyLogo}
              alt="logo"
              className="comedyLogo"
              onClick={checkValueInGenreStateComedy}
              style={{opacity : genreComedyChecked ? 1 : 0.5}}
            />
             <img
              src={thrillerLogo}
              alt="logo"
              className="thrillerLogo"
              onClick={checkValueInGenreStateThriller}
              style={{opacity : genreThrillerChecked ? 1 : 0.5}}
            />
            <img
              src={baloonsLogo}
              alt="logo"
              className="familyLogo"
              onClick={checkValueInGenreStateFamily}
              style={{opacity : genreFamilyChecked ? 1 : 0.5}}
            />
            <img
              src={topScoreLogo}
              alt="logo"
              className="topScoreLogo"
              onClick={checkValueInGenreStateTopScore}
              style={{opacity : genreTopScoreChecked ? 1 : 0.5}}
              
            />
            <img
              src={popularLogo}
              alt="logo"
              className="popularLogo"
              // 
              onClick={checkValueInGenreStatePopular}
              style={{opacity : genrePopularChecked ? 1 : 0.5}}
            />

          </div>
          <div className="label-action-container">
            <label className="label-action"
             onClick={checkValueInGenreStateAction}>Action</label>
          </div>

          <div className="label-drama-container">
            <label className="label-drama"
             onClick={checkValueInGenreStateDrama}>Drama</label>
          </div>

          <div className="label-comedy-container">
            <label className="label-comedy" 
             onClick={checkValueInGenreStateComedy}>Comedy</label>
          </div>

          <div className="label-thriller-container">
            <label className="label-thriller"
             onClick={checkValueInGenreStateThriller}>Thriller</label>
          </div>

          <div className="label-family-container">
            <label className="label-family"
             onClick={checkValueInGenreStateFamily}>Family</label>
          </div>

          <div className="label-topScore-container">
            <label className="label-topScore"
             onClick={checkValueInGenreStateTopScore}>Top Score</label>
             
          </div>

          <div className="label-popular-container">
            <label className="label-popular"
             onClick={checkValueInGenreStatePopular}>Popular</label>
             
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
