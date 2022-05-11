import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchSelected } from "../../models/apiModel";
import MovieDetails from "./moviedetails";
import MovieHeader from "./movieHeader";
import MovieTrailer from "./movieTrailer";

const MovieInfoPage = ({device}) => {

    const [currentMovie, setCurrentMovie] = useState(null);

    const [watchingTrailer, setWatchingTrailer] = useState(false);

    const toggleTrailer = () => {
        
        setWatchingTrailer(!watchingTrailer);
        console.log(watchingTrailer);
    };

    let params = useParams();
    let location = useLocation();
    
    useEffect(() => {
        if('id' in params) {
            fetchSelected(params.id, setCurrentMovie);
        }
    },[location])

    return (
        <div className="movie_info_wrapper">
            <MovieHeader device={device} currentMovie={currentMovie} playTrailer={toggleTrailer}/>
            <MovieDetails device={device} currentMovie={currentMovie}/>
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