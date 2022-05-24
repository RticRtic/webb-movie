import { createAction, createReducer } from "@reduxjs/toolkit";


const signIn = createAction('sign in');
const signUp = createAction('sign up');
const signOut = createAction('sign out');


const actions = {signIn, signUp, signOut};

const initialState = {
    username: "",
    userID: "",
    email: "",
    signedIn: false,

}



const reducer = createReducer(initialState, {

    [signIn] : (state,action) => 
    ({...state, 
        username: action.payload.username,
        userID: action.payload.userID, 
        email: action.payload.email, 
        signedIn: true }),

    [signUp] : (state,action) =>
    ({...state, 
        username: action.payload.username,
        userID: action.payload.userID, 
        email: action.payload.email, 
        signedIn: true }),

    [signOut] : (state,action) => 
    ({...state, 
        username: "",
        userID: "", 
        email: "", 
        signedIn: false })


})



export { actions, reducer };