import React, {PropTypes} from 'react'
import classNames from 'classnames'
import styles from './Button.css'

export default class Button extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: false
    }
  }

  static propTypes = {
    block: PropTypes.bool,
  }

  async action() {
    if (!this.props.onClick) return
    this.setState({loading: true})

    try {
      await this.props.onClick()
    } finally {
      this.setState({loading: false})
    }
  }

  render() {
    const className = classNames({
      [styles.root]: true,
      [styles.block]: this.props.block,
    })

    return (
      <button className={className} onClick={::this.action} disabled={this.state.loading || this.props.disabled}>
        {this.props.children}
      </button>
    )
  }
}
