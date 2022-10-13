import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

import { Auth } from 'aws-amplify';
import React from 'react';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {

  const logout = () => {
    Auth.signOut();
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={logout} style={styles.link}>
        <Text style={styles.linkText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  link: {
    width: 300,
    height: 50,
    margin: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    
  },
  linkText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
});
