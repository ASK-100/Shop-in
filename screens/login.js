import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Home from "./home";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const pressHandler = () => {
    return (
      <Home/>
    )}

  return (
    <TouchableWithoutFeedback>
      <StatusBar backgroundColor={'#bb5d40'}/>
      <View style={styles.container}>
        <Image style={styles.image} source={require("./../assets/bg1.jpg")} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={pressHandler}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffff9e',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },

  image: {
    marginBottom: 20,
    width: 250,
    height: 250,
    borderRadius: 200,
    resizeMode: 'contain' 
  },

  inputView: {
    backgroundColor: "coral",
    borderRadius: 5,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },

  loginBtn: {
    width: "40%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "coral",
    marginBottom: 100,
  },
});