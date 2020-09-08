import { combineReducers } from 'redux'
import { sessionReducer } from './sessionReducers'
import { userReducer } from './userReducers'
import { statusesReducer } from './statusesReducers'
import { quizReducer } from './quizReducer'

const rootReducer = combineReducers({
    session: sessionReducer,
    user: userReducer,
    statuses: statusesReducer,
    quizes: quizReducer
})

export default rootReducer

