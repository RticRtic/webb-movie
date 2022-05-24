

import '../../styles/movie-card.css';
import '../../styles/fa-icons.css'


import { faShoppingCart, faStar, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../features/shoppingcartReducer';


const MovieCard = ({ movie }) => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handleAdd = () => {
        dispatch(actions.addMovie(movie));
    };

    const selectMovie = (movie) => {
        let title = movie.title.replace(/\s+/g, '-');
        navigate('/movie/' + (movie.id) + '/' + (title.toLowerCase()));
    };

    return (

        <div className="movie_card">

            <div className="movie_poster">

                <section><i className='movie_poster_cart' onClick={handleAdd}><FontAwesomeIcon icon={faShoppingCart} /></i></section>

                <section className='movie_poster_bottom_info'>
                    <i><FontAwesomeIcon className="poster_bottom_icon" icon={faStar} />{movie.vote_average}</i>
                    <i><FontAwesomeIcon className="poster_bottom_icon" icon={faDollarSign} />8</i>
                </section>


                <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} onClick={() => selectMovie(movie)}></img>
            </div>

            <article>
                {movie.title}
                <br />
                {movie.release_date}
            </article>

            <button onClick={() => selectMovie(movie)}>More Info</button>
        </div>

    )

}

export default MovieCard;