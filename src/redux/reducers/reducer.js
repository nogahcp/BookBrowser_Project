import { combineReducers } from 'redux'
import { SearchBooksReducer } from './SearchBooksReducer'
import { BookReducer } from './BookReducer'
import { FavoritesReducer } from './FavoritesReducer'

const reducer = combineReducers({
  booksList: SearchBooksReducer,
  currentBook: BookReducer,
  favoriteBooks: FavoritesReducer,
})

export default reducer
