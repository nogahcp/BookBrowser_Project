import React from 'react'
import { FlatList, Text } from 'react-native'
import {connect} from 'react-redux'

import Book from './Book'

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
        data={this.props.booksList.results}
        renderItem={({ item }) => <Book json={item}/>}
        keyExtractor={item => item.id}
      />
    )
  }
}

const mapStateToProps = state => ({
  booksList: state.booksList,
})


export default connect(mapStateToProps)(BooksList)
