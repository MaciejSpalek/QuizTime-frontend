import { combineReducers } from 'redux';
import { sessionReducer } from './sessionReducer';
import { statusReducer } from './statusReducer';
import { quizReducer } from './quizReducer';
import { toastReducer } from './toastReducer';


const rootReducer = combineReducers({
    status: statusReducer,
    session: sessionReducer,
    quizzes: quizReducer,
    toast: toastReducer,
});

export default rootReducer;

