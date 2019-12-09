import React from 'react'
import { FlatList, Text, TouchableHighlight } from 'react-native'
import {connect} from 'react-redux'

import { chooseBook } from '../redux/actions'
import BookItemInList from './BookItemInList'

class BooksList extends React.Component {

  render() {
    if (this.props.booksList.isLoading) {
      return (
        <Text>
          LOADING
        </Text>
      )
    }
    return (
      <FlatList
        data={this.props.isFavorites ? this.props.favoriteBooks : this.props.booksList.results}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            onPress={() => this.handleBookPressed(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <BookItemInList json={item}/>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id}
      />
    )
  }

  //navigate to book page when item is pressed, and save book in store
  handleBookPressed(item) {
    this.props.chooseBook(item)
    this.props.onBookClick()
  }
}

const mapStateToProps = state => ({
  booksList: state.booksList,
  favoriteBooks: state.favoriteBooks,
})

const mapDispatchToProps = {
  chooseBook: chooseBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
