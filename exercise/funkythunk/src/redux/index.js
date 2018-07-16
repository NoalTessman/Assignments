import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//Action Creators

//Initial state
const prevState = {
    todos : []
}
//Reducers
const reducer = (prevState, action) => {
    switch(action.type){
        default: 
        return prevState
    }
}   

export default createStore(reducer, applyMiddleware(thunk))