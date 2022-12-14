import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import {  DataStore, SortDirection } from 'aws-amplify';
import { ChatRoom, Message as MessageModel } from '../src/models';

import Message from '../components/Message';
import MessageInput from '../components/MessageInput';


export default function ChatRoomScreen() {
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [chatRoom, setChatroom] = useState<ChatRoom|null>(null);

    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        fetchChatRoom();
    }, []);

    useEffect(() => {
        fetchMessages();
    }, [chatRoom]);

    useEffect(() => {
        const subscription = DataStore.observe(MessageModel).subscribe(msg => {
            console.log(msg.model, msg.opType, msg.element);
            if (msg.model === MessageModel && msg.opType === 'INSERT') {
                setMessages(existingMessage => [msg.element, ...existingMessage])
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    const fetchChatRoom = async () => {
        if (!route.params?.id) {
            console.warn("no chat room id provided")
            return;
        }
        const chatRoom = await DataStore.query(ChatRoom, route.params.id);
        if (!chatRoom) {
            console.error("couldn't find a chat room with this id");
        } else {
            setChatroom(chatRoom);
        }
    };

    const fetchMessages = async () => {
        if (!chatRoom){
            return;
        }
        const fetchedMessages = await DataStore.query(MessageModel, 
            message => message.chatroomID("eq", chatRoom.id),
            {
                sort: message => message.createdAt(SortDirection.DESCENDING)
            }
        );
            setMessages(fetchedMessages);
    };




    if (!chatRoom) {
        return <ActivityIndicator />
    }

    return (
        <SafeAreaView style={styles.page}>
            <FlatList 
                data={messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted              
             />
            <MessageInput chatRoom={chatRoom}/>  

        </SafeAreaView>               
    ) 
};


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        

    }
})

