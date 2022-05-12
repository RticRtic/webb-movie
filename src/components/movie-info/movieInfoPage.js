import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchSelected, fetchSelectedCollection } from "../../models/apiModel";
import MovieDetails from "./movieDetails";
import MovieHeader from "./movieHeader";
import MovieTrailer from "./movieTrailer";

const MovieInfoPage = ({device}) => {

    const [currentMovie, setCurrentMovie] = useState(null);
    const [currentMovieCollection, setCurrentMovieCollection] = useState(null);

    const [watchingTrailer, setWatchingTrailer] = useState(false);

    const toggleTrailer = () => {
        
        setWatchingTrailer(!watchingTrailer);
        console.log(watchingTrailer);
    };

    let params = useParams();
    let location = useLocation();
    
    useEffect(() => {

        setCurrentMovieCollection(null);
        if('id' in params) {
            fetchSelected(params.id, setCurrentMovie);
            
        }
    },[location])

    useEffect(() => {
        if(currentMovie != null) {
            if(currentMovie.belongs_to_collection != null) {
                fetchSelectedCollection(currentMovie.belongs_to_collection.id, setCurrentMovieCollection);
            }
        }
    },[currentMovie])

    return (
        <div className="movie_info_wrapper">
            <MovieHeader device={device} currentMovie={currentMovie} playTrailer={toggleTrailer}/>
            <MovieDetails device={device} currentMovie={currentMovie} currentMovieCollection={currentMovieCollection}/>
            {(watchingTrailer == true) ? 
            (
                <MovieTrailer movieId={params.id} toggleTrailer={toggleTrailer}/>
            )
            :
            (
                null
            )}
            
        </div>
    )

}

export default MovieInfoPage;