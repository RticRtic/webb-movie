import { combineReducers } from 'redux';

import { reducer as trendingMoviesReducer } from './trendingMoviesReducer';
import { reducer as shoppingCartReducer} from './shoppingcartReducer';
import { reducer as searchedMovieReducer } from "./searchMovieReducer"


const rootReducer = combineReducers({
    //Reducers
    shoppingCart : shoppingCartReducer,

    trendingMovies : trendingMoviesReducer,

    searchedMovie : searchedMovieReducer

});

export { rootReducer };
