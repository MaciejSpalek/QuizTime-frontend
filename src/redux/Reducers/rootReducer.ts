import { combineReducers } from 'redux'
import { sessionReducer } from './sessionReducers'
import { userReducer } from './userReducers'
import { statusesReducer } from './statusesReducers'
import { quizReducer } from './quizReducer'
import { toastReducer } from './toastReducer'


const rootReducer = combineReducers({
    session: sessionReducer,
    user: userReducer,
    statuses: statusesReducer,
    quizes: quizReducer,
    toast: toastReducer,
})

export default rootReducer

