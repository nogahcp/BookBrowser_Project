import React from 'react'
import { Text, View, Image } from 'react-native'

import {styles} from '../styles/BookStyle'

export default function BookItemInList(props) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bookImage}
          source={{uri: getImage(props.json)}}
        />
        <View style={styles.bookInfo}>
          <Text> {props.json.volumeInfo.title} </Text>
          <Text> Publish Date: {props.json.volumeInfo.publishedDate} </Text>
          <Text> Author: TODO </Text>
          {userRate(props.json.userRate)}
        </View>
      </View>
    )
}

function getImage(json) {
  try {
    return json.volumeInfo.imageLinks.smallThumbnail
  } catch {
    //TODO - placeholder
    return ''
  }
}

//if user rate exist show it (not showing in search screen)
function userRate(rate) {
  if (rate !== undefined) {
    return (<Text> Your Rate: {rate} </Text>)
  }
}
