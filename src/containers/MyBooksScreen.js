import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class MyBooksScreen extends React.Component {
  render() {
    return <Text> {this.props.favoriteBooks.length} </Text>
  }
}

const mapStateToProps = state => ({
  favoriteBooks: state.favoriteBooks,
})

export default connect(mapStateToProps)(MyBooksScreen)
