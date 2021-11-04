import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

export default function Header() {
    return(
      <View style={styles.container}>
        <View style={styles.headertxt}>
          {/* <TouchableOpacity>
            <AntDesign name='menu-fold' size={35} color="#e1e1e1" style={styles.iconStyle}/>
          </TouchableOpacity> */}
          <Text style={styles.title}>SHOP-IN</Text>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    
  },
  headertxt: {
    backgroundColor: 'coral',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navigation: {
    color: 'coral',
    alignItems: 'flex-start',
  },
  title: {
    color: '#e1e1e1', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 25,
    width: 5006

  },
  iconStyle: {
    paddingTop: 20,
  }
    
});
  