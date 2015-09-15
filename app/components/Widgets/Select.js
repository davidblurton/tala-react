import React, {PropTypes} from 'react'
import uniqueId from './shared/uniqueId'
import {FormComponent, Label} from '.'
import styles from './Select.css'

export default class Select extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.any,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    title: PropTypes.string,
  }

  getTextFromOption(value) {
    let selectedOption = this.props.options.filter(x => x.value === value)[0]
    return selectedOption && selectedOption.name
  }

  componentDidMount() {
    if (!this.getValue()) {
      this.setValue(this.props.options[0].value)
    }
  }

  render() {
    const selectId = uniqueId('Select')

    let options = this.props.options.map(option => {
      return <option value={option.value} key={option.value}>{option.name}</option>
    })

    return (
      <div>
        <Label htmlFor={selectId} title={this.props.label} />
        <span className={styles.root}>
          <span className={styles.current}>{this.getTextFromOption(this.getValue())}</span>
          <select id={selectId} value={this.getValue()} onChange={this.changeValue} className={styles.select}>
            {options}
          </select>
        </span>
      </div>
    )
  }
}
