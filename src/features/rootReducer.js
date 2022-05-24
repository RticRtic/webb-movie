import { combineReducers } from 'redux';

import { reducer as shoppingCartReducer} from './shoppingcartReducer';
import { reducer as searchedMovieReducer } from "./searchMovieReducer";
import { reducer as authReducer } from "./authReducer";


const rootReducer = combineReducers({
    //Reducers
    shoppingCart : shoppingCartReducer,

    searchedMovie : searchedMovieReducer,

    user : authReducer



});

export { rootReducer };
