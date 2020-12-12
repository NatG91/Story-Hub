import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export const AppNavigator = createBottomTabNavigator({
  ReadAStory: {
      screen: ReadStoryScreen,
      navigationOptions:{
          tabBarIcon: <Image source={require('./assets/read.png')} style={{width:20, height:20}}/>,
          tabBarLabel: "Read A Story"
      }
  },
  WriteAStory: {screen: WriteStoryScreen,
      navigationOptions:{
          tabBarIcon: <Image source={require('./assets/write.png')} style={{width:20, height:20}}/>,
          tabBarLabel: "Write A Story"
      }
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
