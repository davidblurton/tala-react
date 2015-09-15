import React, {PropTypes} from 'react'
import classNames from 'classnames'
import styles from './Heading.css'

export default class Heading extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    hero: PropTypes.bool,
    lined: PropTypes.bool,
    noMargin: PropTypes.bool
  }

  render() {
    const className = classNames({
      [styles.root]: true,
      [styles.hero]: this.props.hero,
      [styles.lined]: this.props.lined,
      [styles.noMargin]: this.props.noMargin
    })

    return (
      <h1 className={className}>
        {this.props.title}
      </h1>
    )
  }
}
