import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducers/rootReducer'
import thunk from 'redux-thunk'

export type RootState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk) ))

export default store;

