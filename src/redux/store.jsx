import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';


const commentState = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return [...state, action.payload]
        case 'CLEAR_COMMENT':
            return []
        case 'CLEAR_ALL':
            return []
        default:
            return state
    }
}

const feelingState = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELINGS':
            return [...state, action.payload]
        case 'CLEAR_FEELING':
            return []
        case 'CLEAR_ALL':
            return []
        default:
            return state
    }

}

const feedbackList = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FEEDBACK':
            return action.payload
        case 'DELETE_FEEDBACK':
            return state.filter((feedback) => feedback.id !== action.payload);
        case 'UPDATE_FLAGGED_STATUS':
            return state.map((feedback) => {
                if (feedback.id === action.payload) {
                    return { ...feedback, flagged: true };
                }
                return feedback;
            });
        default:
            return state
    }
}

const supportState = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return [...state, action.payload]
        case 'CLEAR_SUPPORT':
            return []
        case 'CLEAR_ALL':
            return []
        default:
            return state
    }
}

const understandingState = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return [...state, action.payload]
        case 'CLEAR_UNDERSTANDING':
            return []
        case 'CLEAR_ALL':
            return []
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        feelingState,
        understandingState,
        supportState,
        commentState,
        feedbackList,
    }),
    composeWithDevTools(
        applyMiddleware(logger)
    )
)

export default store