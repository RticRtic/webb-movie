import MovieHeader from "./movieHeader";

const MovieInfoPage = ({device}) => {

    return (
        <div className="movie_info_wrapper">
            <MovieHeader device={device}/>
        </div>
    )

}

export default MovieInfoPage;