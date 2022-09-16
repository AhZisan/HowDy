import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const blue = '#3777f0';
const gray = 'lightgray';


const myId = 'u1';


const Message = ({ message }) => {

    const isMe = message.user.id == myId; //checking with my id

  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer ]}>
      
      <Text style={{color : isMe ? 'black' : 'white'}}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 12,
        maxWidth: '75%',


    },
    leftContainer: {
        backgroundColor:blue,
        marginLeft: 10,
        marginRight: 'auto',
    },
    rightContainer: {
        backgroundColor: gray,
        marginLeft: 'auto',
        marginRight: 10,
    }
});

export default Message



