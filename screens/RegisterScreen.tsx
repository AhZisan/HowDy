import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmail } from "../firebase";
// import { auth } from '../firebase';
// import { connectAuthEmulator } from 'firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {
    // auth
    // .createUserWithEmailAndPassword(email,password)
    // .then(authUser => {
    //     authUser.user?.updateProfile({
    //         displayName: name,
    //         photoURL: imageUrl ||
    //         "https://engage.eiturbanmobility.eu/decidim-packs/media/images/default-avatar-aaa9e55bac5d7159b847.svg"
    //     });
    // })
    // .catch((error) => alert(error.message));

    signInWithEmail(email, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text h3 style={{ marginBottom: 50 }}>
        Create an Howdy account
      </Text>

      {/* <View style={styles.inputCon}>
          <Input
            placeholder="Full Name"
            autoFocus
            textContentType="name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            placeholder="Email"
            textContentType="emailAddress"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            placeholder="Profile Picture URL (optional)"
            textContentType="URL"
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            onSubmitEditing={register}
          />
        </View>
  
        <Button
          containerStyle={styles.button}
          raised
          onPress={register}
          title="Register"
        /> */}
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputCon: {
    width: 310,
  },
  button: {
    width: 250,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
