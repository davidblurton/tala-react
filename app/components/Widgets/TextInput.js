import React, {PropTypes} from 'react'
import styles from './TextInput.css'

export default ({value, placeholder, onChange}) => (
  <span className={styles.root}>
    <input
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={styles.input}
    />
  </span>
)
