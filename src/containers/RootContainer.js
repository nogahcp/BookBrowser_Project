import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import BrowserScreen from './BrowserScreen'
import MyBooksScreen from './MyBooksScreen'

const TabScreens = createBottomTabNavigator({
  Browse: {
    screen: BrowserScreen,
    navigationOptions: {
      tabBarLabel: 'Browse',
    },
  },
  MyBooks: {
    screen: MyBooksScreen,
    navigationOptions: {
      tabBarLabel: 'My Books',
    }
  }
});

const stackNavigation = createStackNavigator({
  Home: {
    screen: TabScreens,
  },
});

export default createAppContainer(stackNavigation)
