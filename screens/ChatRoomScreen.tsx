import Rect from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import Navigation from '../navigation';


export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    console.warn("chat room id: ", route.params?.id)

    navigation.setOptions({title: 'Elon Musk'})


    return (
        <SafeAreaView style={styles.page}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted              
             />
            <MessageInput />      

        </SafeAreaView>               
    ) 
};


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        

    }
})

