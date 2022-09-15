import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState} from 'react'
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';


const MessageInput = () => {
    const [message, setMessage] = useState('');

   const OnPrs= () => {
    console.warn(message);
   }


  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon}/>
        
        <TextInput 
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type here....."
        />
        
        <Feather name="camera" size={24} color="#595959" style={styles.icon} />
        <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon} />
      </View>
      <Pressable onPress={OnPrs}style={styles.buttonContainer}>
      {message ? <Ionicons name="send" size={18} color="white" /> : <AntDesign name="plus" size={22} color="white" />}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,

    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal: 5, 

    },
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',


    },






});



export default MessageInput