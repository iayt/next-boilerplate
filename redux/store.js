import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewareEnhancer = applyMiddleware()
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

export default store