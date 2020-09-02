import { combineReducers } from 'redux'
import { sessionReducer } from './sessionReducers';
import { userReducer } from './userReducers';

const rootReducer = combineReducers({
    session: sessionReducer,
    user: userReducer
})

export default rootReducer

