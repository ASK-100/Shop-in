import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Header() {
    return(
        <View style={styles.headertxt}>
            <TouchableOpacity>
                <Text style={styles.navigation}>Drawer</Text>
            </TouchableOpacity>
            <Text style={styles.title}>SHOP-IN</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headertxt: {
      paddingTop: 20,
      padding: 20,
      backgroundColor: '#FF7F50',
      alignItems: 'center',
    },
    navigation: {
      color: '#40e0d0',
      alignItems: 'flex-start',
    },
    title: {
      textShadowColor: '#40e0d0',
      textShadowOffset:  {width: 1.5, height: 1.5},
      textShadowRadius: 3,
      color: '#e1e1e1', // <-- The magic
      textAlign: 'center', // <-- The magic
      fontWeight: 'bold',
      fontSize: 50,
    }
    
  });