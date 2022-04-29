import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { store } from "..";
import { STATUS } from '../models/constants.js';
import { actions } from "../features/trendingMoviesReducer";




const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '478482cb8ce7c6d6fa5ecb5d066f3fff';

const trendingUrl = 'trending/movie/day?api_key='


export async function fetchTrending(dispatch) {

    dispatch(actions.isFetching());

    console.log('Fetching Trending...')

    fetch(baseUrl + trendingUrl + apiKey)
    .then(res => res.json())
    .then(data => dispatch(actions.success(data)))
    .catch(err => dispatch(actions.failure(err)));

}

