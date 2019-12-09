import React from 'react'
import { FlatList, Text, TouchableHighlight } from 'react-native'
import {connect} from 'react-redux'

class BookInfo extends React.Component {

  render() {
    return (
      <Text>
        {JSON.stringify(this.props.bookInfo)}
      </Text>
    )
  }
}

const mapStateToProps = state => ({
  bookInfo: state.currentBook,
})


export default connect(mapStateToProps)(BookInfo)
