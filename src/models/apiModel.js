import { async } from "@firebase/util";
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

export async function fetchSelected(movieId, setCurrentMovie) {


    fetch(baseUrl + 'movie/' + movieId + '?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US')
    .then(res => res.json())
    .then(data => setCurrentMovie(data))
    .catch(err => console.log(err));

}

export async function fetchSelectedCast(movieId, setCurrentMovieCast) {


    fetch(baseUrl + 'movie/' + movieId + '/credits?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US')
    .then(res => res.json())
    .then(data => {

        let movieCast = [];

        for(let member of data.cast) {
            if(member.known_for_department === "Acting") {
                movieCast.push(member)
            }
        }

        for(let member of data.crew) {
            if(member.known_for_department == "Directing") {
                movieCast.push(member)
            }
        }
        // let movieCast = data.cast.filter((member) => member.known_for_department === "Acting" || member.known_for_department === "Directing");

        setCurrentMovieCast(movieCast);
        

        

    })
    .catch(err => console.log(err));

}

export async function fetchSelectedCollection(collectionId, setCurrentMovieCollection) {


    fetch(baseUrl + 'collection/' + collectionId + '?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US')
    .then(res => res.json())
    .then(data => {

        setCurrentMovieCollection(data);
    })
    .catch(err => console.log(err));


}


export async function fetchSelectedTrailer(movieId, setMovieTrailer) {


    fetch(baseUrl + 'movie/' + movieId + '/videos?api_key=478482cb8ce7c6d6fa5ecb5d066f3fff&language=en-US')
    .then(res => res.json())
    .then(data => {

        let trailer = data.results.filter((video) => video.type === "Trailer");

        if(trailer.length > 0) {
            setMovieTrailer(trailer[0]);
        }

        

    })
    .catch(err => console.log(err));

}

