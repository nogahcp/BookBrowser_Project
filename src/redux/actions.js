// action types
export const SEARCH_BOOKS = 'SEARCH_BOOKS'
export const GET_BOOK = 'GET_BOOK'
export const BOOKS_FETCH_SUCCEEDED = 'BOOKS_FETCH_SUCCEEDED'
export const BOOKS_FETCH_FAILED = 'BOOKS_FETCH_FAILED'

// action creators
export const searchBook = searchString => ({
  type: SEARCH_BOOKS,
  payload: searchString,
})

export const getBook = bookId => ({
  type: GET_BOOK,
  payload: bookId,
})

export const booksFetchSucceeded = booksResults => ({
  type: BOOKS_FETCH_SUCCEEDED,
  payload: booksResults,
})

export const booksFetchFailed = error => ({
  type: BOOKS_FETCH_FAILED,
  payload: error,
})
