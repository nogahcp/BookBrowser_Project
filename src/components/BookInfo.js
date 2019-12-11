import React from 'react'
import { FlatList, Text, ScrollView, View, Linking } from 'react-native'
import { Icon } from 'react-native-elements'
import {connect} from 'react-redux'

import {styles} from '../styles/BookInfoStyles'

class BookInfo extends React.Component {

  //render relevant info
  render() {
    const volumeInfo = this.props.bookInfo.volumeInfo
    const saleInfo = this.props.bookInfo.saleInfo

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}> Authors: {this.getBookAuthors()} </Text>
        <Text style={styles.text}> Publisher: {volumeInfo.publisher!==undefined ? volumeInfo.publisher : 'not provided'} </Text>
        <View style={styles.rowContent}>
          <Text style={styles.text}> Reading Modes: </Text>
          <Text style={styles.text}> Text </Text>
          <Icon
            name={volumeInfo.readingModes.text ? 'check' : 'close'}
            color={volumeInfo.readingModes.text ? 'green' : 'red'}
            type='font-awesome'
          />
          <Text style={styles.text}> Image </Text>
          <Icon
            name={volumeInfo.readingModes.image ? 'check' : 'close'}
            color={volumeInfo.readingModes.image ? 'green' : 'red'}
            type='font-awesome'
          />
        </View>
        <Text style={styles.text}> Average Ratins: {volumeInfo.averageRating} </Text>
        <Text style={styles.text}> Ratins Count: {volumeInfo.ratingsCount} </Text>
        <Text style={styles.text}> Description: {volumeInfo.description!==undefined ? volumeInfo.description : 'not provided'} </Text>
        <Text style={styles.text}> Language: {volumeInfo.language} </Text>
        <View style={styles.rowContent}>
          <Text style={styles.text}> Preview Link </Text>
          <Icon
            name='search'
            type='font-awesome'
            onPress={() => this.openURL(volumeInfo.previewLink)}
          />
        </View>
        <View style={styles.rowContent}>
          <Text style={styles.text}> Info Link </Text>
          <Icon
            name='info'
            type='font-awesome'
            onPress={() => this.openURL(volumeInfo.infoLink)}
          />
        </View>
        <Text style={styles.text}> Country {saleInfo.country} </Text>
        <Text style={styles.text}> Saleability: {saleInfo.saleability.replace(/_/g, " ")} </Text>
        <View style={styles.rowContent}>
          <Text style={styles.text}> Is Ebook </Text>
          <Icon
            name={saleInfo.isEbook ? 'check' : 'close'}
            color={saleInfo.isEbook ? 'green' : 'red'}
            type='font-awesome'
          />
        </View>
      </ScrollView>
    )
  }

  //return string of authors
  getBookAuthors() {
    return (this.props.bookInfo.volumeInfo.authors !== undefined ?
      this.props.bookInfo.volumeInfo.authors.toString() :
      'not provided')
  }

  openURL(url) {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

}

const mapStateToProps = state => ({
  bookInfo: state.currentBook
})

export default connect(mapStateToProps)(BookInfo)
