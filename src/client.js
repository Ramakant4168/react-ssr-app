import React from 'react'
import { hydrate } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Logger from 'redux-logger'
import { StaticRouter } from 'react-router-dom';

import App from './containers/App'
import spaceXApp from './reducers'


const preloadedState = window.__PRELOADED_STATE__


delete window.__PRELOADED_STATE__


const store = createStore(
  spaceXApp,
  preloadedState,
  compose(applyMiddleware(thunk, Logger))
  //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

hydrate(
  <Provider store={store}>
    <StaticRouter>
      <App />
    </StaticRouter>
  </Provider>,
  document.getElementById('root')
)
