import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Pressable, 
    KeyboardAvoidingView, 
    Platform 
} from 'react-native'


import React, { useState,} from 'react'
import EmojiSelector from 'react-native-emoji-selector'
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

import AttachSection from '../AttachSection';
import { BottomTabBar } from '@react-navigation/bottom-tabs';


const MessageInput = () => {
    const [message, setMessage] = useState('');

    const sendMessages = () => {
        //Send message
        console.warn("sending:", message);

        setMessage('');
        setEmoOn(false);
        setShouldShowAttach(false);
    }

    const [shouldShowAttach, setShouldShowAttach] = useState(false);
  

    const [isEmoOn,setEmoOn] = useState(false);
  

    const onPlusClicked = () =>{
        
            setShouldShowAttach(!shouldShowAttach)

        }



   const OnPrs= () => {
    // console.warn(message);
    if (message) {
        sendMessages();
    }
    else {
        onPlusClicked();
    }   
}


  return (
    <KeyboardAvoidingView 
        style={[styles.root, {height: isEmoOn ? "52%" : "auto" }]} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={95}
    >
        <View style={styles.row}>
        <View style={styles.inputContainer}>
         
         <Pressable onPress={() => setEmoOn((currentValue) => !currentValue)}>

         <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon}/>

         </Pressable>
        
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
        {shouldShowAttach && (  <AttachSection /> ) }

        {isEmoOn && (<EmojiSelector onEmojiSelected={emoji => setMessage((curentMessage) => curentMessage + emoji)}
        columns={8}
        showSectionTitles= {false}
        showSearchBar={false}
        showTabs={true}
        />)}

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    row:{
        flexDirection: 'row',
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
        backgroundColor: '#ff7518',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',


    },






});



export default MessageInput