

import '../../styles/trending-movies.css';
import '../../styles/fa-icons.css'


import { faShoppingCart, faStar, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MovieCard = ({movie}) => {

    return (

    <div className="trending_movie_card">

        <div className="movie_poster">
            <i><FontAwesomeIcon icon={faShoppingCart}/></i>
            <i><FontAwesomeIcon className="poster_bottom_icon" icon={faStar}/>{movie.vote_average}</i>
            <i><FontAwesomeIcon className="poster_bottom_icon" icon={faDollarSign}/>9.99</i>
            <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}></img>
        </div>

        <article>
            {movie.title}
            <br/>
            {movie.release_date}
        </article>
        
        <button>More Info</button>
    </div>
        
    )

}

export default MovieCard;