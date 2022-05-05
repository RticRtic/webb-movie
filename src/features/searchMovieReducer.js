import { createAction, createReducer } from "@reduxjs/toolkit";


const isFetching = createAction("is fetching");
const success = createAction("success");
const failure = createAction("failure");
const disableSearch = createAction("disable search");

const actions = {isFetching, success, failure, disableSearch}

const STATUS = {
    NORMAL: "normal",
    FETCHING: "is fetching",
    SUCCESS: "success",
    FAILURE: "failure"
}

const initialState = {
    status: STATUS.NORMAL,
    movie: null
}

const reducer = createReducer(initialState, {
    [isFetching] : (state, action) => ({
        ...state, status: STATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status: STATUS.SUCCESS,
        movie: action.payload
    }),
    [failure] : (state, action) => ({
        status: STATUS.FAILURE,
        movie:null
    }),
    [disableSearch] : (state, actions) => ({
        status: STATUS.NORMAL,
        movie: null
    })
})

export {actions, STATUS, reducer}