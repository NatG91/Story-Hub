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
