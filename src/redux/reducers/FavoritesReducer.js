import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, RATE_BOOK } from '../actions'


const defaultState = []

export const FavoritesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      //check if already exist to prevent duplicates
      if (state.filter(book => book.id === action.payload.id).length === 0)
        return [ ...state, action.payload ]
    case REMOVE_FROM_FAVORITES:
      return [ ...state ].filter(book => book.id !== action.payload.id)
    case RATE_BOOK:
      //remove book from favorites, and add it with the rating
      const newState =  [...state ].filter(book => book.id !== action.payload.book.id)
      return [...newState, {...action.payload.book, userRate: action.payload.rate}]
    default:
      return state
  }
}
