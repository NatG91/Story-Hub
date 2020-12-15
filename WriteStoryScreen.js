import React from 'react';
import { Header,TextInput, TouchableOpacity, View } from 'react-native';

export default class WriteStoryScreen extends React.Component {
    
    render (){
        return(
            <View>
<TextInput placeholder="Title"/> 
<TextInput placeholder="Author"/> 
<TextInput placeholder="Write" multiline= {true}/> 

<TouchableOpacity>
    Submit
</TouchableOpacity>
</View>
    
        )}
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
          if(routeName === "WriteStory"){
            return(
              <Image
              source={require("../assets/write.png")}
              style={{width:40, height:40}}
            />
            )
            
          }
          else if(routeName === "ReadStory"){
            return(
              <Image
              source={require("../assets/read.png")}
              style={{width:40, height:40}}
            />)
            
          }
        }
      })
    }
  )