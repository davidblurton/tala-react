import React from 'react'
import {connect} from 'react-redux'
import {TextInput} from '../Widgets'
import * as SentenceActionCreators from 'actions/sentence'

@connect()
export default class Search extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      query: ''
    }
  }

  onChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    let query = this.state.query
    window.history.pushState({query}, null, `?q=${query}`);

    this.props.dispatch(SentenceActionCreators.getSuggestions(query))
  }

  getSearchFromUrl() {
    let query = decodeURI(window.location.search).match(/q=([^&]*)/)

    if (query) {
      this.setState({query: query[1]})
      this.props.dispatch(SentenceActionCreators.getSuggestions(query[1]))
    }
  }

  componentWillMount() {
    this.getSearchFromUrl()
  }

  render() {
    return (
      <form onSubmit={::this.onSubmit}>
        <TextInput value={this.state.query} onChange={::this.onChange} />
      </form>
    )
  }
}
