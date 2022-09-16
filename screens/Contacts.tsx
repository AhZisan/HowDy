import { Text, View, StyleSheet } from 'react-native';



export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts will be here</Text>
 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
  },
});
