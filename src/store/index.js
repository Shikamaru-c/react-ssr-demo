import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
  return store
}

export const getClientStore = () => {
  const state = window.context.state
  const store = createStore(reducer, state, applyMiddleware(thunk.withExtraArgument(clientAxios)))
  return store
}
