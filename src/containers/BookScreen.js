import React from 'react'
import { View, Text, Image, Switch } from 'react-native'
import {connect} from 'react-redux'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'


import BookInfo from '../components/BookInfo'
import {styles} from '../styles/BookScreenStyles'
import { addToFavorites, removeFromFavorites } from '../redux/actions'

class BookScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            style={styles.bookImage}
            source={{uri: this.getImage(this.props.bookInfo)}}
          />
          <Icon
            name={this.isFavorite() ? 'ios-heart' : 'ios-heart-empty'}
            color='pink'
            type='ionicon'
            size={50}
            onPress={() => this.handleFavoriteSwitchChange()}
          />
        </View>
        <BookInfo />
      </View>
    )
  }

  handleFavoriteSwitchChange() {
    if (this.isFavorite()) {
      this.props.removeFromFavorites(this.props.bookInfo)
    } else {
      this.props.addToFavorites(this.props.bookInfo)
    }
  }

  getImage(json) {
    try {
      return json.volumeInfo.imageLinks.thumbnail
    } catch {
      //TODO - placeholder
      return ''
    }
  }

  //return true/false if book is saved or not
  isFavorite() {
    return !(this.props.favoriteBooks.filter(book => book.info.id === this.props.bookInfo.id).length === 0)
  }
}

const mapStateToProps = state => ({
  bookInfo: state.currentBook,
  favoriteBooks: state.favoriteBooks,
})

const mapDispatchToProps = {
  addToFavorites: addToFavorites,
  removeFromFavorites: removeFromFavorites,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen)
