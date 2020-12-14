import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    );
  }
}
export const AppNavigator = createBottomTabNavigator({
  ReadAStory: {
      screen: ReadStoryScreen,
  },
  WriteAStory: {screen: WriteStoryScreen,
  }
})
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
