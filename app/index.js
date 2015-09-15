import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'

import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter
} from 'redux-react-router'

import { Provider, connect } from 'react-redux'
import { devTools } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import { createHistory } from 'history'

import * as reducers from './reducers'
import routes from './components/Router'
import App from './components/App'
import promiseMiddleware from './lib/promiseMiddleware'

const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers
});

const store = compose(
  applyMiddleware(promiseMiddleware),
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore)(reducer);

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('outlet'));
