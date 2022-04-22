import React from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../styles/trending-movies';

const TrendingMovies = () => {

    const dispatch = useDispatch();
    const trendingMovies = useSelector(state => state.trendingMovies);

    

    return (
        <div>

        </div>
    )

}