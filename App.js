import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/users';
import LogoTitle from './src/logo';

// const AppNavigator = createDrawerNavigator({
//   Home: HomeScreen,
//   Users: UserScreen
// });

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        headerTitle: LogoTitle
      }),
    },
    Users: {
      screen: UserScreen
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    },
  },
);

export default createAppContainer(AppNavigator);
