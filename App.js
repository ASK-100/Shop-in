import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FF7F50'}/>
      <View style={styles.headertxt}>
        <TouchableOpacity style={styles.navigation}>
          
        </TouchableOpacity>
        <Text style={styles.title}>SHOP-IN</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  headertxt: {
    paddingTop: 40,
    padding: 20,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
  },

  
});
