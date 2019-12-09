import { SEARCH_BOOKS, GET_BOOK, BOOKS_FETCH_SUCCEEDED, BOOKS_FETCH_FAILED } from '../actions'


const defaultState = {results: []}

export const SearchBooksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return { ...state, isLoading: true }
    case BOOKS_FETCH_SUCCEEDED:
      return { ...(action.payload), isLoading: false }
    default:
      return state
  }
}
