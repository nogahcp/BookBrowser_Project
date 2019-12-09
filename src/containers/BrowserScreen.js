import React from 'react'
import {View, Text, ScrollView, TextInput } from 'react-native'
import {connect} from 'react-redux'

import BooksList from '../components/BooksList'
import { searchBook } from '../redux/actions'
import {styles} from '../styles/BrowserStyle'

class BrowserScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
    }
  }

  render() {
    return (
      <ScrollView>
        <TextInput
          style={styles.search}
          placeholder='search'
          onChangeText={text => this.handleSeachTextChange(text)}
          value={this.state.searchString}
          returnKeyType='search'
        />
        <BooksList onBookClick={() => this.props.navigation.navigate('Book')}/>
      </ScrollView>
    )
  }

  handleSeachTextChange(text) {
    this.setState({
      searchString: text
    })
    //search if more than 2 chars
    if (text.length > 1) {
      this.props.searchBook(text)
    }
  }
}

const mapStateToProps = state => ({
  booksList: state.booksList,
})

const mapDispatchToProps = {
  searchBook: searchBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowserScreen)
