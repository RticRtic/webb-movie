

import PopularGenres from "./popularGenres";
import TrendingMovies from "./trendingMovies";

const Home = ({device}) => {
    return (
        <div>
            <TrendingMovies device={device}></TrendingMovies>

            <PopularGenres/>
        </div>
    )
}

export default Home;