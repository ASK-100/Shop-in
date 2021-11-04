import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from './components/header';
import Icon from 'react-native-ico';


let iconHeight = 26;
let iconWidth = 30;


export default function Home() {

  state = {
    screenText: 'Press a button'
  }

  changeText = (text) => {
    console.log(text + ' has been pressed')
    this.setState({
      screenText: text
    })
  }

  // #adf802 light lemon green
  // #40e0d0 turquoise
  // #ff7f50 coral

  return(
    <View>
      <Text style={{fontSize: 30, color: '#40e0d0'}}>{this.state.screenText}</Text>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable  onPress={() => this.changeText('Home')} style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
            <Icon name='home' group="universalicons" height={iconHeight} width={iconWidth} color='#448aff'/>
          </Pressable>

          <Pressable  onPress={() => this.changeText('Shopping Cart')} style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
            <Icon name='shopping-cart' height={iconHeight} width={iconWidth} color='#448aff'/>
          </Pressable>

          <Pressable  onPress={() => this.changeText('cash')} style={styles.IconBehave} android_ripple={{borderless:true, radius:50}}>
            <Icon name="money-5" group="shopping" height={iconHeight} width={iconWidth} color='#448aff'/>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff9e',
    alignItems: 'center',

  },

  NavContainer: {
    position:'absolute',
    alignItems: 'center',
    bottom: 20,
  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor: 'coral',
    width:'98%',
    justifyContent: 'center',
    borderRadius: 5,
    justifyContent:'space-evenly'
  },

  IconBehave: {
    padding: 15,
  }

});
