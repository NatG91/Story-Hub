import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
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
  WriteAStory: {
    screen: WriteStoryScreen,
  },
},
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if(routeName === "WriteAStory"){
          return(
            <Image
            source={require("./assets/write.png")}
            style={{width:40, height:40}}
          />
          )
          
        }
        else if(routeName === "ReadAStory"){
          return(
            <Image
            source={require("./assets/read.png")}
            style={{width:40, height:40}}
          />)
          
        }
      }
    })
  }
)
const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
