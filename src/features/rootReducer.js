import { combineReducers } from 'redux';
import { reducer as shoppingCartReducer} from './shoppingcartReducer';
import { reducer as searchedMovieReducer } from "./searchMovie"


const rootReducer = combineReducers({
    //Reducers
    shoppingCart : shoppingCartReducer,
    searchedMovie : searchedMovieReducer

});

export { rootReducer };