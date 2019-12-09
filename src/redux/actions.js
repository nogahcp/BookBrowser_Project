// action types
export const SEARCH_BOOKS = 'SEARCH_BOOKS'
export const BOOKS_FETCH_SUCCEEDED = 'BOOKS_FETCH_SUCCEEDED'
export const BOOKS_FETCH_FAILED = 'BOOKS_FETCH_FAILED'
export const CHOOSE_BOOK = 'CHOOSE_BOOK'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const RATE_BOOK = 'RATE_BOOK'

// action creators
export const searchBook = searchString => ({
  type: SEARCH_BOOKS,
  payload: searchString,
})

export const booksFetchSucceeded = booksResults => ({
  type: BOOKS_FETCH_SUCCEEDED,
  payload: booksResults,
})

export const booksFetchFailed = error => ({
  type: BOOKS_FETCH_FAILED,
  payload: error,
})

export const chooseBook = bookInfo => ({
  type: CHOOSE_BOOK,
  payload: bookInfo,
})

export const addToFavorites = book => ({
  type: ADD_TO_FAVORITES,
  payload: book
})

export const removeFromFavorites = book => ({
  type: REMOVE_FROM_FAVORITES,
  payload: book
})

export const rateBook = (book, rate) => ({
  type: RATE_BOOK,
  payload: {
    book,
    rate
  }
})
