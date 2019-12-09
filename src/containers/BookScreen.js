import React from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'

class BookScreen extends React.Component {
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



export default connect(mapStateToProps)(BookScreen)
