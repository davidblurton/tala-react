import React, {PropTypes} from 'react'
import classNames from 'classnames'
import uniqueId from './shared/uniqueId'
import {Button, Label, FormComponent} from '.'
import styles from './TextArea.css'

export default class TextArea extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.number,
    required: PropTypes.required,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  onToggle() {
    this.setState({
      editing: !this.state.editing
    })
  }

  changeValue(event) {
    this.setValue(event.target.value.substr(0, this.props.maxLength))
  }

  componentDidMount() {
    this.setValue(this.props.value)
  }

  render() {
    const inputId = uniqueId('TextArea')
    const labelEl = <Label htmlFor={inputId} title={this.props.label} />

    const maxElClasses = classNames({
      [styles.maxLength]: true,
      [styles.small]: !!this.props.label
    })

    const maxLengthEl = this.props.maxLength ? <span className={maxElClasses}>
      { this.getValue() ? `${this.props.maxLength - this.getValue().length} characters remaining` : `Max ${this.props.maxLength} characters` }
    </span> : null

    const textareaEl = (
      <div className={styles.container}>
        {maxLengthEl}
        <textarea
          autoFocus
          value={this.getValue()}
          onBlur={::this.onToggle}
          onChange={this.changeValue}
          id={inputId}
          className={styles.textarea}
          required={this.props.required} />
      </div>
    )

    const textEl = this.state.editing ? textareaEl : <div>
      <pre onDoubleClick={::this.onToggle} className={styles.staticText}>{this.getValue()}</pre>
      <Button onClick={::this.onToggle} inline>Edit</Button>
    </div>

    return (
      <div className={styles.root}>
        {labelEl}
        {textEl}
      </div>
    )
  }
}
