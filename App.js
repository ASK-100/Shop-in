import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import Login from './screens/login';


export default function App(){
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <View>
          <StatusBar backgroundColor={'#bb5d40'}/>
          <Header />
          <Login />
        </View>
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
    color: '#40e0d0',
  }
});
