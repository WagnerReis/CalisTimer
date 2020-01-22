import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import HomeScreen from './src/screen/HomeScreen'
import EMOMScreen from './src/screen/EMOMScreen'
import IsometriaScreen from './src/screen/IsometriaScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  EMOM: EMOMScreen,
  Isometria: IsometriaScreen
}, { initialRouteName: 'Isometria' })

export default createAppContainer(AppNavigator)

