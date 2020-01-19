import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import HomeScreen from './src/screen/HomeScreen'
import EMOMScreen from './src/screen/EMOMScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  EMOM: EMOMScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)

