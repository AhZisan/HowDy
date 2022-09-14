import * as React from 'react';

import { Text , View, Image , StyleSheet } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem';



import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
      <View style={styles.page}>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
        <ChatRoomItem/>
      </View>  
  );
}


const styles = StyleSheet.create({
  page:{
    backgroundColor: 'white',
    flex: 1,
  },

})
