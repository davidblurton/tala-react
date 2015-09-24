import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'

import { Provider, connect } from 'react-redux'

import * as reducers from './reducers'
import App from './components/App'
import promiseMiddleware from './lib/promiseMiddleware'

const reducer = combineReducers({
  ...reducers
})

const store = compose(
  applyMiddleware(promiseMiddleware),
)(createStore)(reducer)

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    )
  }
}

let outlet = document.createElement('div')
document.body.appendChild(outlet)

ReactDOM.render(<Root />, outlet)
