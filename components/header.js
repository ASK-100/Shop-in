import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
    return(
      <View style={styles.container}>
        <View style={styles.headertxt}>
          <TouchableOpacity>
            <AntDesign name='menu-fold' size={35} color="#e1e1e1" style={styles.iconStyle}/>
          </TouchableOpacity>
          <Text style={styles.title}>SHOP-IN</Text>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    
  },
  headertxt: {
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navigation: {
    color: '#40e0d0',
    alignItems: 'flex-start',
  },
  title: {
    
    color: '#e1e1e1', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 40,
    padding: 10,
    paddingTop: 25,
    paddingRight: 100,
    paddingLeft: 60,
    marginHorizontal: 10,
  },
  iconStyle: {
    paddingTop: 20,
  }
    
  });