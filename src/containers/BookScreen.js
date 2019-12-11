import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import {connect} from 'react-redux'
import { Icon } from 'react-native-elements'
import StarRating from 'react-native-star-rating';

import BookInfo from '../components/BookInfo'
import {styles} from '../styles/BookScreenStyles'
import { addToFavorites, removeFromFavorites, rateBook } from '../redux/actions'

class BookScreen extends React.Component {

  constructor(props) {
    super(props)
    //if already rated - show user rate
    let starCount
    if (this.isFavorite()) {
      starCount = this.props.favoriteBooks.filter(book => book.id === this.props.bookInfo.id)[0].userRate
    }
    if (starCount === undefined) {
      starCount = 0
    }
    this.state = {
      starCount,
    }
  }

  render() {
    const isFavorite = this.isFavorite()
    return (
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            style={styles.bookImage}
            source={{uri: this.getImage(this.props.bookInfo)}}
          />
          <Icon
            name={isFavorite ? 'ios-heart' : 'ios-heart-empty'}
            color='pink'
            type='ionicon'
            size={50}
            onPress={() => this.handleFavoriteSwitchChange()}
          />
          <View>
            <StarRating
              disabled={!isFavorite}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor='#d4af37'
            />
            <Button
              title="Rate"
              disabled={!isFavorite}
              onPress={() => this.saveRate()}
            />
            {this.ratingDisableExplained()}
          </View>
        </View>
        <BookInfo />
      </View>
    )
  }

  ratingDisableExplained() {
    if (!this.isFavorite()) {
      return (
        <Text>
          you can rate only saved books
        </Text>
      )
    }
  }

  saveRate() {
    this.props.rateBook(this.props.bookInfo, this.state.starCount)
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
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
    return !(this.props.favoriteBooks.filter(book => book.id === this.props.bookInfo.id).length === 0)
  }
}

const mapStateToProps = state => ({
  bookInfo: state.currentBook,
  favoriteBooks: state.favoriteBooks,
})

const mapDispatchToProps = {
  addToFavorites: addToFavorites,
  removeFromFavorites: removeFromFavorites,
  rateBook: rateBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen)
