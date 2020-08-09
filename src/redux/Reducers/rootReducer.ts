import { combineReducers } from 'redux'
import { sessionReducer } from './sessionReducers';

const rootReducer = combineReducers({
    session: sessionReducer
})

export default rootReducer

