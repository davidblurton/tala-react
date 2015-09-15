import React, {PropTypes} from 'react'
import {Route, Redirect} from 'react-router'

import App from './App'

import {Login} from './Login'

import {
  Styleguide
} from './Styleguide'

export default (
  <Route path="/" component={App}>
    <Route path="_styleguide" component={Styleguide} />

    <Route path="login" component={Login} />
  </Route>
)
