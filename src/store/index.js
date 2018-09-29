import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  return store
}

export default getStore