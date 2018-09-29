import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

const App = () => 
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <div>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </div>
    </BrowserRouter>
  </Provider>

ReactDOM.hydrate(<App />, document.querySelector('#root'))