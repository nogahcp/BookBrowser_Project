import React from 'react'
import {View, Text, ScrollView, TextInput } from 'react-native'
import {connect} from 'react-redux'

import BooksList from '../components/BooksList'
import { searchBook } from '../redux/actions'

class BrowserScreen extends React.Component {
  constructor(props) {
    super(props)
    //// TODO: fetch data on search
    this.props.searchBook("hello")
  }

  render() {
    return (
      <ScrollView>
        <Text> BrowserScreen </Text>
        <BooksList />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  booksList: state.booksList,
})

const mapDispatchToProps = {
  searchBook: searchBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowserScreen)
