import Axios from 'axios'
import React from 'react'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import thunk from 'redux-thunk'
import Logger from 'redux-logger'
import { StaticRouter } from 'react-router-dom';

import {getUrlKeyMap,getUrlBasedOnSate} from '../src/utils/utils'




import SpacexApp from './reducers'
import App from './containers/App'


export default function handleRender(req, res) {

  const params = req.originalUrl;

  let url = 'https://api.spacexdata.com/v3/launches?limit=100'

  if(params){
    let map = getUrlKeyMap(params);

    let year = (map.has('yr') && (map.get('yr')!=0) ) ? map.get('yr') : null
    let launch = (map.has('lau') && (map.get('lau') !=0) ) ? map.get('lau') : null
    let land = (map.has('lnd') && (map.get('lnd')!=0)) ? map.get('lnd') : null
  
    url = getUrlBasedOnSate(year,launch,land)
  }



  let preloadedState = {}

  Promise.resolve()
    .then(() => {
      return Axios.get(url)

    })
    .then(response => {
      preloadedState = { missions: { list: response.data } }
      const store = createStore(SpacexApp, preloadedState, applyMiddleware(thunk, Logger))
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter>
            <App />
          </StaticRouter>

        </Provider>
      )
      const finalState = store.getState()
      res.set('Cache-Control', 'public, max-age=31557600')
      res.send(renderFullPage(html, finalState))
    })
    .catch(error => {
      res.send("Error occured while fetching data from spaceX server!!!")
    });
}

function renderFullPage(html, preloadedState) {
  return `
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images2.imgbox.com">
        <title>SpaceX Missions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
        </script>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
    `
}
