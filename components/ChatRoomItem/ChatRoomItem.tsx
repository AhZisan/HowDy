import React from 'react';
import { Text , View, Image , StyleSheet } from 'react-native';
import styles from './Styles';

export default function ChatRoomItem() {
    return(
        <View style={styles.container}>
        <Image source={{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} style={styles.image} />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>5</Text>
        </View>

        <View style={styles.rightConteiner}>
          <View style={styles.row}>
            <Text style={styles.name}>Sohel Rana</Text>
            <Text style={styles.text}>11:12 PM</Text>
          </View>

          <Text numberOfLines={1} style={styles.text}>how are you ? how are you ? how are you ? how are you ? how are you ?</Text>
        </View>       
      </View>
    );
}

