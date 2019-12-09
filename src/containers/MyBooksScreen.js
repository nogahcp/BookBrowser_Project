import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

import BooksList from '../components/BooksList'

class MyBooksScreen extends React.Component {
  render() {
    return (
      <BooksList onBookClick={() => this.props.navigation.navigate('Book')} isFavorites={true}/>
    )
  }
}

const mapStateToProps = state => ({
  favoriteBooks: state.favoriteBooks,
})

export default connect(mapStateToProps)(MyBooksScreen)
