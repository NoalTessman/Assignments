import {createStore} from "redux";
import React from "react";

const initialState = {
    contacts: []
}

const constactReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(contactReducer);

export default store 

