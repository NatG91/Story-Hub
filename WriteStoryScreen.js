import React from 'react';
import { Header,TextInput, TouchableOpacity, View } from 'react-native';

export default class Welcome extends React.Component {
    
    render (){
        return(
            <View>
<TextInput style={styles.container} placeholder="Title"/> 
<TextInput style={styles.container} placeholder="Author"/> 
<TextInput style={styles.container} placeholder="Write" multiline= {true}/> 

<TouchableOpacity>
    
</TouchableOpacity>
</View>
    
        )}
}