import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions'


const defaultState = []

export const FavoritesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      //check if already exist to prevent duplicates
      if (state.filter(book => book.info.id === action.payload.id).length === 0)
        return [ ...state, {info: action.payload} ]
    case REMOVE_FROM_FAVORITES:
      return [ ...state ].filter(book => book.info.id !== action.payload.id)
    default:
      return state
  }
}
