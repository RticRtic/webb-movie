
import { useEffect, useState } from "react";
import { fetchByCategory } from "../../models/apiModel";
import PopularGenres from "./popularGenres";
import MovieSwiper from "./movieSwiper";
import { useNavigate } from "react-router-dom";

const Home = ({ device }) => {

    const [trendingMovies, setTrendingMovies] = useState(null);
    const [topRatedMovies, setTopRatedMovies] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {

        fetchByCategory("trending/movie/day", setTrendingMovies);
        fetchByCategory("movie/top_rated", setTopRatedMovies);

    },[]);

    return (
        <div>
            <div className="home_page_header">
                <div className="home_page_header_inner">
                    <div>
                        <h3 onClick={() => console.log(trendingMovies)}>Welcome.</h3>
                        <h3>Owning a virtual movie isn't satisfying... Collect the DVD's!</h3>
                        <button onClick={() => navigate("/catalog")}>Explore</button>
                    </div>
                </div>
            </div>

            {(trendingMovies != null) ? (
                <MovieSwiper device={device} movies={trendingMovies} sectionTitle={"Trending Movies"} />
            )
            :
            (
                null
            )}

            {(topRatedMovies != null) ? (
                <MovieSwiper device={device} movies={topRatedMovies} sectionTitle={"Top Rated"} />
            )
            :
            (
                null
            )}


            

            <PopularGenres />
        </div>
    )
}

export default Home;