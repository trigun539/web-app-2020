import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

export default function configureStore(initialState) {
  const middlewares = []
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancer(...enhancers)
  )

  return store
}
