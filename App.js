/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, View, AppRegistry, TouchableOpacity, Text } from 'react-native';
import Svg, {Path, Defs, Stop, G} from 'react-native-svg';
import ViewAnim from './src/components/viewAnim';
import BaseText from './src/components/baseText';
// import Pulse from './src/components/pulseCircle';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Pulse from 'react-native-pulse';
import Icon from 'react-native-fa-icons';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const Button = ({onPress}) =>{
  return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="microphone" style={{ fontSize: 45, color: 'white', position: 'absolute'}}/>
   </TouchableOpacity>
   );
}

type Props = {};

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      pulse: true
    }
  }

  onPressPulse = () => {
    this.setState({
        pulse: !this.state.pulse
      })
  }

  render() {
    return (
      <View style={styles.container}>
          <LinearGradient id="gradient"
             colors={['#0188cc', '#229faf', '#54ad77', '#71c360', '#7cbe50', '#7cbe50']}
             start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
             style={{ height: 4, width: '100%', top:0}}>
          </LinearGradient>
          <View style={styles.mainText}>
                <BaseText style={{color: '#ffff'}}/>
          </View>
          <View style={styles.secondText}>
              <ViewAnim style={{width: 250, height: 50}}/>
          </View>
          <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this.onPressPulse}>
                  <Icon name="microphone" style={{ fontSize: 45, color: 'white', position: 'absolute', zIndex:1 }}/>
               </TouchableOpacity>
             {!this.state.pulse && <Pulse color='#00a0db' duration={1000}/>}
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#283642',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
  },
  mainText:{
     width: '100%',
     height:100,
     justifyContent: 'center',
     alignItems: 'center',
     top: 70,
     zIndex: 0
   },
   secondText:{
      width: '100%',
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 0
    },
  buttonContainer:{
     justifyContent: 'center',
     alignItems: 'center',
     margin:100,
     zIndex: 1
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:150,
    backgroundColor:'#68bc14',
    borderRadius:200,
    zIndex: 1
},
linearGradient: {
   paddingLeft: 15,
   paddingRight: 15,
   borderRadius:100,
   marginTop:16,
   width:70,
   height:70,
   zIndex: 1
 },

});
