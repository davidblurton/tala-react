import React, {PropTypes} from 'react'
import classNames from 'classnames'
import {FormComponent, Label} from '.'
import styles from './TextInput.css'
import uniqueId from './shared/uniqueId'

export default class TextInput extends React.Component {

  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string
  }

  render() {
    const inputId = uniqueId('TextInput')

    const className = classNames({
      [styles.label]: this.props.label,
      [styles.error]: this.showError() || this.props.error,
      [styles.required]: this.showRequired(),
      [styles.pristine]: this.isPristine(),
      [styles.input]: true,
      [this.props.className]: !!this.props.className,
    })

    const errorMessage = this.getErrorMessage() || this.props.error
    let error
    if (errorMessage) {
      error = (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )
    }

    let labelMessage = this.props.label
    let label = labelMessage ? <Label htmlFor={inputId} title={labelMessage} /> : null

    return (
      <span className={styles.root}>
        {label}
        <input
          id={inputId}
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder}
          onChange={this.changeValue}
          value={this.getValue()}
          className={className}
        />
        {error}
      </span>
    )
  }
}
