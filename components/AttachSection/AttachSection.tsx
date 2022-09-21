import { 
    View, 
    StyleSheet, 
    Pressable, 
    KeyboardAvoidingView, 
    Platform 
} from 'react-native'

import React, { useState,} from 'react'
import { useNavigation } from '@react-navigation/native';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';







const AttachSection = () => {

    const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="image-multiple-outline" size={50} color="#404040" style={styles.items}/>
            <MaterialCommunityIcons name="file-video-outline" size={50} color="#404040" style={styles.items}/>
            <Feather name="folder" size={50} color="#404040" style={styles.items}/>
            
            <Pressable onPress={() => navigation.navigate('FastShareRoom')}>
                <MaterialCommunityIcons name="rocket-launch-outline" size={50} color="#404040" style={styles.items}/>
            </Pressable>
            

        </View>
    )


}

    const styles = StyleSheet.create({

        container: {
            padding: 8,
            justifyContent: 'space-between',
            flexDirection: 'row',
        },

        items: {
            margin: 5,
            padding: 5,
            borderRadius: 10,
            backgroundColor: '#f2f2f2'
        }


    })




export default AttachSection