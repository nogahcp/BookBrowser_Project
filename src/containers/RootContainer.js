import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import BrowserScreen from './BrowserScreen'
import MyBooksScreen from './MyBooksScreen'
import BookScreen from './BookScreen'

const TabScreens = createBottomTabNavigator({
  Browse: {
    screen: BrowserScreen,
    navigationOptions: {
      tabBarLabel: 'Browse',
      params: { navigateToBook: (book) => this.params.navigation.navigate('Book') }
    },
  },
  MyBooks: {
    screen: MyBooksScreen,
    navigationOptions: {
      tabBarLabel: 'My Books',
    }
  }
});

const stackNavigation = createStackNavigator(
  {
    Home: TabScreens,
    Book: BookScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(stackNavigation)
