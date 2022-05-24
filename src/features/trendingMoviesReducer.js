import { createAction, createReducer } from "@reduxjs/toolkit";
import { STATUS } from '../models/constants';


const isFetching = createAction('is fetching trending');
const success = createAction('fetch trending success');
const failure = createAction('fetch trending failure');

const actions = {isFetching, success, failure};

const initialState = {
    status: '',
    data: null,
    error: null
}


const reducer = createReducer(initialState, {

    [isFetching] : (state, action) => ({...state, status: STATUS.FETCHING}),

    [success] : (state, action) => ({...state, status: STATUS.SUCCESS, data: action.payload}),

    [failure] : (state, action) => ({...state, status: STATUS.FAILURE, error: action.payload})

})

export { actions, reducer };