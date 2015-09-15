import React, {PropTypes} from 'react'
import {root} from './Label.css'

export default class Label extends React.Component {
  render() {
    return (
      <label className={root} {...this.props}>
        {this.props.title}
      </label>
    )
  }
}
