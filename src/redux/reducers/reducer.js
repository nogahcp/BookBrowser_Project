import { combineReducers } from 'redux'
import { SearchBooksReducer } from './SearchBooksReducer'
import { BookReducer } from './BookReducer'

const reducer = combineReducers({
  booksList: SearchBooksReducer,
  currentBook: BookReducer,
})

export default reducer
