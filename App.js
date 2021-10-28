import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FF7F50'}/>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
  },

  
});
