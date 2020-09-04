import { combineReducers } from 'redux'
import { sessionReducer } from './sessionReducers';
import { userReducer } from './userReducers';
import { statusesReducer } from './statusesReducers';

const rootReducer = combineReducers({
    session: sessionReducer,
    user: userReducer,
    statuses: statusesReducer
})

export default rootReducer

