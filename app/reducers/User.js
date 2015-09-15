import immu from 'immu'
import {User as constants} from '../consts/ActionTypes'
import {handleActions} from 'redux-actions'

const initialState = immu({
  user: null,
  error: null
})

const actions = {
  [constants.getCurrentUser]: {
    next(state, {payload}) {
      return immu({user: payload})
    },
    throw(state, {payload}) {
      return immu({error: payload})
    },
  },
}

export default handleActions(actions, initialState)
