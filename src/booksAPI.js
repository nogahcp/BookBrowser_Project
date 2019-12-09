//fetch data from server
const searchURL = 'https://www.googleapis.com/books/v1/volumes/?q='

//fetch books from server using search string
const fetchBooks = (searchString) => {
  return fetch(searchURL + searchString)
    .then(res => res.json())
      .then(
        (result) => {
          return result
        },
        (error) => {
          return error
        }
      )
}

export { fetchBooks }
