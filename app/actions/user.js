import {User as constants} from '../consts/ActionTypes'
import * as apiActions from './api'
import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'

const actions = {
  [constants.getCurrentUser]: () => apiActions.get('/users/self'),
}

export default mapValues(actions, (action, type) => createAction(type, action))
