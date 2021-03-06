import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import HomeScreen from './src/screen/HomeScreen'
import EMOMScreen from './src/screen/EMOMScreen'
import IsometriaScreen from './src/screen/IsometriaScreen'
import AMRAPScreen from './src/screen/AMRAPScreen'
import AboutScreen from './src/screen/AboutScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  EMOM: EMOMScreen,
  Isometria: IsometriaScreen,
  AMRAP: AMRAPScreen,
  About: AboutScreen
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)

