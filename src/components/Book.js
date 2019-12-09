import React from 'react'
import { Text, View, Image } from 'react-native'

import {styles} from '../styles/BookStyle'

export default function Book(props) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bookImage}
          source={{uri: props.json.volumeInfo.imageLinks.smallThumbnail}}
        />
        <View style={styles.bookInfo}>
          <Text> {props.json.volumeInfo.title} </Text>
          <Text> Publish Date: {props.json.volumeInfo.publishedDate} </Text>
          <Text> Author: TODO </Text>
        </View>
      </View>
    )
}
