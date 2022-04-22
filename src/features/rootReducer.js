import { combineReducers } from 'redux';
import { reducer as shoppingCartReducer} from './shoppingcartReducer';


const rootReducer = combineReducers({
    //Reducers
    shoppingCart : shoppingCartReducer
});

export { rootReducer };