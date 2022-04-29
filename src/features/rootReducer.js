import { combineReducers } from 'redux';
import { reducer as shoppingCartReducer } from './shoppingcartReducer';
import { reducer as trendingMoviesReducer } from './trendingMoviesReducer';


const rootReducer = combineReducers({
    //Reducers
    shoppingCart : shoppingCartReducer,
    trendingMovies : trendingMoviesReducer
});

export { rootReducer };