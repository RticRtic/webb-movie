
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

export async function fetchSelected(movieId, setCurrentMovie) {


    fetch(baseUrl + 'movie/' + movieId + '?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US')
    .then(res => res.json())
    .then(data => setCurrentMovie(data))
    .catch(err => console.log(err));

}