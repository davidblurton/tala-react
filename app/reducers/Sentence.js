import immu from 'immu'
import {Sentence as constants} from '../consts/ActionTypes'
import {handleActions} from 'redux-actions'

const initialState = immu({
  sentence: null,
  error: null
})

const actions = {
  [constants.getSuggestions]: {
    next(state, {payload}) {
      return immu({sentence: payload})
    },
    throw(state, {payload}) {
      return immu({error: payload})
    },
  },
}

export default handleActions(actions, initialState)
