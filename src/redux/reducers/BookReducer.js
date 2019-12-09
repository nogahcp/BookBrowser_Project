import { CHOOSE_BOOK } from '../actions'


const defaultState = {}

export const BookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHOOSE_BOOK:
      return { ...action.payload }
    default:
      return state
  }
}
