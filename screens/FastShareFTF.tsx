import Rect from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';


export default function FastShareFTF() {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text> Fast share </Text>
            </View>

        </SafeAreaView>


  )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40
    }


})