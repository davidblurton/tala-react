import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import styles from './Login.css'

import {Heading, Button, TextInput} from '../Widgets'
import * as UserActionCreators from 'actions/user'

@connect(({User}) => ({User}))
export default class Login extends React.Component {
  static propTypes = {
    User: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={styles.root}>
        <Heading title="Log in" />
      </div>
    )
  }
}
