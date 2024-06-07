import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

const comments = (state= [], action) => {
    switch(action.type){
        case 'ADD_COMMENTS':
            return [...state, action.payload]
        default:
            return state
    }
}

const feelings = (state=[], action) => {
    switch(action.type) {
        case 'ADD_FEELINGS':
            return [...state, action.payload]
        default:
            return state
    }

}


const reviews = (state=[], action) => {
    switch(action.type){
        case 'ADD_REVIEWS':
            return [...state, action.payload]
        default:
            return state
    }
}

const understanding = (state=[], action) => {
    switch(action.type){
        case 'ADD_UNDERSTANDING':
            return [...state, action.payload]
        default:
            return state
    }
}


const store = createStore(
    combineReducers({
      
    }),
    composeWithDevTools(applyMiddleware(logger)),
  );
  
  
  export default store;