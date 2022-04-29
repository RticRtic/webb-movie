import { createAction, createReducer } from "@reduxjs/toolkit";



const addMovie = createAction('add movie');
const removeMovie = createAction('remove movie');


const actions = {addMovie, removeMovie};

const initialState = [{title: 'batman', id: '3'},{title: 'watchmen', id: '5'}]



const reducer = createReducer(initialState, {

    [addMovie] : (state, action) => ([...state, action.payload]),

    [removeMovie] : (state, action) => (state.filter(movie => movie.id != action.payload))


})
// For later use 
// const dispatch = useDispatch();
// dispatch(actions.addMovie({OBJECT}))
// dispatch(actions.removeMovie('ID'))
// const movies = useSelector(state => state.shoppingCart);

export { actions, reducer };