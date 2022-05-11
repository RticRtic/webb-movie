import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { fetchSelectedTrailer } from '../../models/apiModel';
import '../../styles/movie-trailer.css';

const MovieTrailer = ({movieId, toggleTrailer}) => {

    const [movieTrailer, setMovieTrailer] = useState(null);

    useEffect(() => {
        fetchSelectedTrailer(movieId, setMovieTrailer)
    },[])

    if(movieTrailer != null) {
        return (
            <div className='movie_trailer_cover'>
                <i onClick={toggleTrailer}>
                    <FontAwesomeIcon icon={faXmark} />  
                </i>
                <div className='movie_trailer_container'>
                    <iframe src={'https://www.youtube.com/embed/' + (movieTrailer.key)} allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }
    
}

export default MovieTrailer;