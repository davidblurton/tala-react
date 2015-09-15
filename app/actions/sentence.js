import {Sentence as constants} from '../consts/ActionTypes'
import * as apiActions from './api'
import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'

const actions = {
  [constants.getSuggestions]: (query) => apiActions.get(`sentence?q=${query}`),
}

export default mapValues(actions, (action, type) => createAction(type, action))
