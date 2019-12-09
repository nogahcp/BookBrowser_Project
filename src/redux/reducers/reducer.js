import { combineReducers } from 'redux'
import { SearchBooksReducer } from './SearchBooksReducer'

const reducer = combineReducers({
  booksList: SearchBooksReducer,
})

export default reducer
